import useCart from "../../store/useCart";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  X,
  PackageSearch,
} from "lucide-react";

function Cart() {
  const { Cartproducts, actions } = useCart((state) => state);
  // Calculate subtotal
  const subtotal = Cartproducts.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10 overflow-x-hidden">
      {/* Decorative glow orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-2/3 left-2/3 w-64 h-64 bg-indigo-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Page Header ───────── */}
        <div className="mb-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30 mb-4 animate-in fade-in zoom-in duration-500">
            <ShoppingCart size={26} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Your Cart</h1>
          <p className="text-slate-400 text-sm mt-1">
            Review and manage the items in your cart
          </p>
        </div>

        {Cartproducts?.length === 0 ? (
          <div className="flex flex-col items-center gap-6 py-24 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl">
              <PackageSearch size={32} className="text-slate-500" />
            </div>
            <div className="space-y-2">
              <p className="text-white text-lg font-semibold">Your cart is empty</p>
              <p className="text-slate-400 text-sm max-w-xs mx-auto">
                Looks like you haven't added anything to your cart yet.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* ── Cart Items ───────── */}
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-center mb-4 px-2">
                <h2 className="text-xl font-semibold text-white">
                  Items ({Cartproducts?.length || 0})
                </h2>
                <button
                  onClick={() => actions.clearCart()}
                  className="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Trash2 size={16} />
                  Clear Cart
                </button>
              </div>

              {Cartproducts?.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col sm:flex-row items-center gap-6 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg shadow-black/30 hover:border-violet-500/40 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white/5 rounded-xl p-2 relative shadow-inner">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center sm:justify-start text-center sm:text-left w-full sm:w-auto">
                    <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-200 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-violet-400 font-bold mt-2 text-lg">
                      ${product.price?.toFixed(2)}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-0 w-full sm:w-auto">
                    <div className="flex items-center bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden p-1 shadow-inner">
                      <button
                        onClick={() => actions.decreaseQuantity(product)}
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center text-white font-medium">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => actions.increaseQuantity(product)}
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-center sm:text-right min-w-[80px]">
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Total</p>
                      <p className="text-white font-semibold text-lg">
                        ${((product.price) * (product.quantity)).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => actions.removeFromCart(product.id)}
                      className="p-2.5 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all cursor-pointer ml-auto sm:ml-0"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Order Summary ───────── */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="sticky top-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/30">
                <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Subtotal</span>
                    <span className="font-medium text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Shipping</span>
                    <span className="font-medium text-emerald-400">Free</span>
                  </div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="flex justify-between items-center text-base">
                    <span className="text-slate-200 font-medium">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 py-3.5 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold tracking-wide shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/40 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
