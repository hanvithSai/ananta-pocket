import { create } from "zustand"; // Import the create function from the Zustand library to create a store

export const useProductStore = create((set, get) => ({
    products: [], // Initial state for products
    setProduct: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "All fields are required." };
        }
        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });
            const data = await response.json();
            if (response.ok) {
                // backend might return the created item directly or under `data`
                const created = data.data || data;
                set((state) => ({ products: [...state.products, created] }));
                return { success: true, message: "Product created successfully.", product: created };
            } else {
                return { success: false, message: data.message || "Failed to create product." };
            }
        } catch (err) {
            return { success: false, message: err.message || "Network error." };
        }
    },
    removeProduct: (productId) =>
        set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),
    updateProduct: (updatedProduct) =>
        set((state) => ({
            products: state.products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)),
        })),
    getProductById: (productId) => get().products.find((product) => product.id === productId),
}));

// const [state, setState] = useState([])