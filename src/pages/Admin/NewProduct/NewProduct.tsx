import "./NewProduct.css";

import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";

import { getCategories } from "../../../services/categoryService";
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../../../services/productService";

import type { Category } from "../../../types/Category";
import type { ProductInput } from "../../../types/Product";


const initialProduct: ProductInput = {
  title: "",

  category: "",

  type: "product",

  shortDescription: "",

  description: "",

  image: "",

  affiliateLink: "",

  price: "",

  coupon: "",

  benefit: "",

  location: "",

  featured: false,

  samChoice: false,

  novelty: false,

  samOpinion: "",

  pros: [],

  cons: [],
};



export default function NewProduct() {


  const [product, setProduct] =
    useState<ProductInput>(initialProduct);


  const [error, setError] =
    useState("");


  const [isSaving, setIsSaving] =
    useState(false);


  const [categories, setCategories] =
    useState<Category[]>([]);


  const [, setIsCategoriesLoading] =
    useState(true);


  const [isProductLoading, setIsProductLoading] =
    useState(false);



  const navigate = useNavigate();


  const { id: productId } = useParams();


  const isEditing = Boolean(productId);



  const hasCategories =
    categories.length > 0;




  useEffect(() => {


    async function loadCategories() {


      try {


        const availableCategories =
          await getCategories();


        setCategories(
          availableCategories.filter(
            (category) => category.active
          )
        );


      } catch {


        setError(
          "Não foi possível carregar as categorias."
        );


      } finally {


        setIsCategoriesLoading(false);


      }


    }


    void loadCategories();


  }, []);





  useEffect(() => {


    if (!productId) return;


    const id = productId;


    async function loadProduct() {


      setIsProductLoading(true);


      try {


        const existingProduct =
          await getProduct(id);



        if (!existingProduct) {


          toast.error(
            "Produto não encontrado."
          );


          navigate("/admin/products");


          return;


        }



        const {

          id: _id,

          createdAt: _createdAt,

          updatedAt: _updatedAt,

          ...productInput


        } = existingProduct;



        setProduct(productInput);



      } catch {


        toast.error(
          "Não foi possível carregar o produto."
        );


        navigate("/admin/products");



      } finally {


        setIsProductLoading(false);


      }


    }


    void loadProduct();



  }, [navigate, productId]);






  function updateField<Key extends keyof ProductInput>(

    field: Key,

    value: ProductInput[Key]

  ) {


    setProduct((currentProduct) => ({

      ...currentProduct,

      [field]: value,

    }));


  }






  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {


    event.preventDefault();


    setError("");



    if (!hasCategories) {


      setError(
        "Cadastre uma categoria antes de criar um produto."
      );


      return;


    }




    if (

      !product.title.trim() ||

      !product.category ||

      !product.description.trim()

    ) {


      setError(
        "Preencha todos os campos obrigatórios."
      );


      return;


    }




    setIsSaving(true);




    try {



      const productData: ProductInput = {


        ...product,


        title:
          product.title.trim(),


        shortDescription:
          product.shortDescription.trim(),


        description:
          product.description.trim(),


        image:
          product.image.trim(),


        affiliateLink:
          product.affiliateLink?.trim() || "",



      };





      if (productId) {


        await updateProduct(
          productId,
          productData
        );



      } else {



        await createProduct(
          productData
        );


      }




      toast.success(

        isEditing

          ? "Produto atualizado com sucesso."

          : "Produto cadastrado com sucesso!"

      );



      navigate("/admin/products");




    } catch {


      toast.error(

        isEditing

          ? "Erro ao atualizar produto."

          : "Erro ao cadastrar produto."

      );


      setError(
        "Não foi possível salvar o produto."
      );



    } finally {


      setIsSaving(false);


    }


  }
    return (

    <AdminLayout>


      <section className="new-product">


        <div className="new-product__heading">


          <p className="new-product__eyebrow">
            Produtos
          </p>



          <h1>

            {isEditing
              ? "Editar Produto"
              : "Novo Produto"}

          </h1>



          <p>

            {isEditing
              ? "Atualize as informações da recomendação."
              : "Preencha as informações para preparar uma nova recomendação."}

          </p>


          <p className="new-product__info">
            Campos com * são obrigatórios.
          </p>


        </div>





        {isProductLoading ? (


          <p className="new-product__loading">

            Carregando produto...

          </p>



        ) : (



        <form

          className="new-product__form"

          onSubmit={handleSubmit}

        >


          <div className="new-product__grid">



            <div className="new-product__field">

                <div className="new-product__section-title">

  <h2>
    📝 Informações principais
  </h2>

  <p>
    Dados básicos da recomendação.
  </p>

</div>


              <label>
                Nome *
              </label>


              <input

                value={product.title}

                onChange={(e)=>

                  updateField(
                    "title",
                    e.target.value
                  )

                }

              />


            </div>





            <div className="new-product__field">


              <label>
                Categoria *
              </label>


              <select

                value={product.category}

                onChange={(e)=>

                  updateField(
                    "category",
                    e.target.value
                  )

                }

              >


                <option value="">
                  Selecione
                </option>



                {categories.map((category)=>(

                  <option

                    key={category.id}

                    value={category.name}

                  >

                    {category.name}

                  </option>

                ))}


              </select>


            </div>





            <div className="new-product__field">


              <label>
                Tipo de recomendação *
              </label>


              <select

                value={product.type}

                onChange={(e)=>

                  updateField(

                    "type",

                    e.target.value as ProductInput["type"]

                  )

                }

              >

                <option value="product">
                  🛍 Produto
                </option>


                <option value="restaurant">
                  🍽 Restaurante
                </option>


                <option value="hotel">
                  🏨 Hotel
                </option>


                <option value="experience">
                  ✨ Experiência
                </option>


              </select>


            </div>





            <div className="new-product__field new-product__field--full">


              <label>
                Imagem *
              </label>


              <input

                value={product.image}

                onChange={(e)=>

                  updateField(

                    "image",

                    e.target.value

                  )

                }

              />


            </div>





            <div className="new-product__field">


              <label>
                Localização (opcional)
              </label>


              <input

                placeholder="Cidade ou endereço"

                value={product.location ?? ""}

                onChange={(e)=>

                  updateField(

                    "location",

                    e.target.value

                  )

                }

              />


            </div>





            <div className="new-product__field">


              <label>
                Preço (opcional)
              </label>


              <input

                placeholder="Ex: R$ 199,90 ou consultar"

                value={product.price ?? ""}

                onChange={(e)=>

                  updateField(

                    "price",

                    e.target.value

                  )

                }

              />


            </div>





            <div className="new-product__field new-product__field--full">


              <label>
                Descrição curta *
              </label>


              <input

                value={product.shortDescription}

                onChange={(e)=>

                  updateField(

                    "shortDescription",

                    e.target.value

                  )

                }

              />


            </div>

                        <div className="new-product__section-title new-product__section-title--full">

  <h2>
    ✨ Conteúdo da recomendação
  </h2>

  <p>
    Conte a experiência e a opinião da Sam.
  </p>

</div>

                        <div className="new-product__field new-product__field--full">


              <label>
                Descrição completa *
              </label>


              <textarea

                value={product.description}

                onChange={(e)=>

                  updateField(

                    "description",

                    e.target.value

                  )

                }

              />


            </div>


                <div className="new-product__section-title new-product__section-title--full">

  <h2>
    🎟 Oferta e benefícios
  </h2>

  <p>
    Informações de compra, descontos e vantagens para seguidores.
  </p>

</div>


            <div className="new-product__field new-product__field--full">


              <label>
                Link de afiliado (opcional)
              </label>


              <input

                value={product.affiliateLink ?? ""}

                onChange={(e)=>

                  updateField(

                    "affiliateLink",

                    e.target.value

                  )

                }

              />


            </div>





            <div className="new-product__field new-product__field--full">


              <label>
                Cupom de desconto (opcional)
              </label>


              <input

                placeholder="Ex: SAM10"

                value={product.coupon ?? ""}

                onChange={(e)=>

                  updateField(

                    "coupon",

                    e.target.value

                  )

                }

              />


            </div>





            <div className="new-product__field new-product__field--full">


              <label>
                Benefício para seguidores (opcional)
              </label>


              <input

                placeholder="Ex: 10% de desconto exclusivo"

                value={product.benefit ?? ""}

                onChange={(e)=>

                  updateField(

                    "benefit",

                    e.target.value

                  )

                }

              />


            </div>




          </div>


                <div className="new-product__section-title new-product__section-title--full">

  <h2>
    ⭐ Destaques
  </h2>

  <p>
    Defina como essa recomendação será apresentada no site.
  </p>

</div>


          <label>

            <input

              type="checkbox"

              checked={product.featured}

              onChange={(e)=>

                updateField(

                  "featured",

                  e.target.checked

                )

              }

            />


            Produto em destaque


          </label>





          <label>


            <input

              type="checkbox"

              checked={product.samChoice}

              onChange={(e)=>

                updateField(

                  "samChoice",

                  e.target.checked

                )

              }

            />


            Escolha da Sam


          </label>





          <label>


            <input

              type="checkbox"

              checked={product.novelty}

              onChange={(e)=>

                updateField(

                  "novelty",

                  e.target.checked

                )

              }

            />


            Novidade


          </label>





          <div className="new-product__field new-product__field--full">


            <label>
              Opinião da Sam (opcional)
            </label>


            <textarea

              value={product.samOpinion ?? ""}

              onChange={(e)=>

                updateField(

                  "samOpinion",

                  e.target.value

                )

              }

            />


          </div>





          {error && (

            <p className="new-product__error">

              {error}

            </p>

          )}






          <div className="new-product__actions">


            <button

              type="button"

              onClick={()=>

                navigate("/admin/products")

              }

            >

              Cancelar

            </button>





            <button

              type="submit"

              disabled={isSaving}

            >

              {isSaving

                ? "Salvando..."

                : "Salvar"

              }


            </button>


          </div>





        </form>


        )}



      </section>


    </AdminLayout>

  );

}