import { useEffect, useState } from "react";
import { api } from "../../services/api";
import imgLoading from "../../assets//loading.jpg"
import { Header } from "../../components/Header/header";
import { ProductList } from "../../components/ProductList";
import { CartModal } from "../../components/CartModal";
import { toast } from "react-toastify";
import { useRef } from "react";
import { StyledLoading } from "../../styles/loading";

export const Feed = () => {
  const [productsApi, setProductsApi] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [cartList, setCartList] = useState([]);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setOpenModal(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {;
      if(event.key === "Escape"){
        buttonRef.current?.click()
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
        setProductsApi(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filterProducts = productsApi.filter((product) =>
      product.name.toUpperCase().includes(inputSearch.toUpperCase())
    );

    setProducts(filterProducts);
  }, [inputSearch]);

  if (loading) {
    return (
      <StyledLoading>
        <img src={imgLoading} alt="Carregando..." />
      </StyledLoading>
    );
  }

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const addProductList = (newProduct) => {
    const newProductList = [...cartList, newProduct];

    if (!cartList.some((productNew) => productNew.id === newProduct.id)) {
      setCartList(newProductList);
      toast.success("Produto adicionado com sucesso!", {
        autoClose: 2000,
      });
    } else {
      toast.error("Produto já foi selecionado!", {
        autoClose: 2000,
      });
    }
  };

  const removeProductCart = (newProductId) => {
    const newProductList = cartList.filter((productNew) => productNew.id !== newProductId);
    setCartList(newProductList);
    toast.warning("Item removido com sucesso!", {
      autoClose: 2000,
    });
  };

  const removeAllProducts = () => {
    const emptiedCart = [];
    setCartList(emptiedCart);
    toast.warning("Todos os produtos foram removidos com sucesso!", {
      autoClose: 2000,
    });
  };

  return (
    <div>
      <Header
        modalRef={modalRef}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        openModal={openModal}
        setOpenModal={setOpenModal}
        toggleModal={toggleModal}
      />
      <main>
        <ProductList
          products={products}
          setProducts={setProducts}
          addProductList={addProductList}
        />
        {openModal ? (
          <CartModal
            buttonRef={buttonRef}
            modalRef={modalRef}
            removeProductCart={removeProductCart}
            removeAllProducts={removeAllProducts}
            cartList={cartList}
            toggleModal={toggleModal}
          />
        ) : null}
      </main>
    </div>
  );
};
