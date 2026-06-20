import { create } from "zustand"; // Import the create function from the Zustand library to create a store

export const useProductStore = create((set) => ({
  products: [], // Initial state for products

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "All fields are required." };
    }
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      if (res.ok) {
        // backend might return the created item directly or under `data`
        const created = data.data;
        set((state) => ({ products: [...state.products, created] }));
        return {
          success: true,
          message: "Product created successfully.",
          product: created,
        };
      } else {
        return {
          success: false,
          message: data.message || "Failed to create product.",
        };
      }
    } catch (err) {
      return { success: false, message: err.message || "Network error." };
    }
  },

  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (res.ok) {
        set({ products: data.data });
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  },

  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) {
      console.error("Failed to delete product:", data.message);
      return {
        success: false,
        message: data.message || "Failed to delete product.",
      };
    }
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    })); // Update the products state by filtering out the deleted product immediately
    return {
      success: true,
      message: data.message || "Product deleted successfully.",
    };
  },

  updateProduct: async (pid, updatedProduct) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();
      if (!data.success) {
        return {
          success: false,
          message: data.message || "Failed to update product.",
        };
      }
      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? { ...product, ...updatedProduct } : product,
        ), // Optimistically update the product in the state immediately after a successful response
      }));
      return {
        success: true,
        message: "Product updated successfully.",
        product: data.data,
      };
    } catch (err) {
      return { success: false, message: err.message || "Network error." };
    }
  },
}));

// const [state, setState] = useState([])
