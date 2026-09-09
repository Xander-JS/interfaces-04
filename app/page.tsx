import {
  ArrowLeft,
  Bell,
  ChevronDown,
  Download,
  Home,
  BarChart3,
  ShoppingBag,
  Package,
  Megaphone,
  MessageCircle,
  CircleUserRound,
  Search,
  Upload,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Users,
  ShoppingCart,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  return (
    <body className="min-h-screen bg-slate-100 font-sans text-slate-900 antialiased">

      {/* =========================
          BARRA SUPERIOR
      ========================== */}
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 font-bold text-white">
              R
            </div>

            <span className="text-lg font-bold text-slate-900">flex</span>
          </div>


          {/* Buscador */}
          <div className="flex flex-1 items-center gap-3">

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50">
              <ArrowLeft size={18} />
            </button>

            <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

          </div>


          {/* Información del usuario */}
          <div className="flex items-center gap-4">

            {/* Notificaciones */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50">
              <Bell size={18} />
              <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
            </button>


            {/* Balance */}
            <div className="hidden text-right sm:block">
              <p className="text-xs text-slate-400">Your Balance</p>
              <p className="text-sm font-bold text-indigo-600">$5.456</p>
            </div>


            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-orange-100 text-orange-500">
              <CircleUserRound size={22} />
            </div>

            <p className="hidden text-sm font-medium text-slate-700 md:block">Hi, Lay</p>

          </div>

        </nav>
      </header>


      {/* =========================
          CONTENIDO DE LA APLICACIÓN
      ========================== */}
      <div className="mx-auto flex max-w-[1600px] items-start gap-6 px-6 py-6">


        {/* =========================
            BARRA LATERAL
        ========================== */}
        <aside className="flex w-64 shrink-0 flex-col gap-8 rounded-2xl bg-white p-5">

          {/* Menu */}
          <div className="flex flex-col gap-1">

            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Menu</p>


            {/* Dashboard */}
            <button className="flex items-center gap-3 rounded-xl bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200">
              <Home size={18} />
              <span>Dashboard</span>
            </button>


            {/* Orders */}
            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <ShoppingBag size={18} />
              <span className="flex-1 text-left">Orders</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>


            {/* Products */}
            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Package size={18} />
              <span className="flex-1 text-left">Products</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>


            {/* Analytics */}
            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <BarChart3 size={18} />
              <span>Analytics</span>
            </button>


            {/* Marketing */}
            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Megaphone size={18} />
              <span className="flex-1 text-left">Marketing</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>


            {/* Messages */}
            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <MessageCircle size={18} />
              <span className="flex-1 text-left">Messages</span>

              {/* Número de mensajes */}
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-600">25</span>
            </button>

          </div>


          {/* Integraciones */}
          <div className="flex flex-col gap-1">

            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Integrations</p>

            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <span className="flex h-5 w-5 items-center justify-center text-blue-500">◆</span>
              <span>Jira</span>
            </button>

            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <span className="flex h-5 w-5 items-center justify-center text-fuchsia-500">✣</span>
              <span>Slack</span>
            </button>

            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <span className="flex h-5 w-5 items-center justify-center text-sky-500">▣</span>
              <span>Intercom</span>
            </button>

          </div>


          {/* Logout */}
          <button className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50">
            <LogOut size={18} />
            <span>Logout</span>
          </button>

        </aside>



        {/* =========================
            CONTENIDO PRINCIPAL
        ========================== */}
        <main className="flex-1 space-y-6">


          {/* =========================
              CABECERA DEL DASHBOARD
          ========================== */}
          <section className="flex items-center justify-between">

            {/* Título */}
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <Home size={20} />
              </div>

              <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>

            </div>


            {/* Acciones */}
            <div className="flex items-center gap-3">

              {/* Selector de fecha */}
              <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                <CalendarDays size={16} />
                <span>This Month</span>
                <ChevronDown size={16} className="text-slate-400" />
              </button>


              {/* Descargar reporte */}
              <button className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-200 hover:bg-emerald-600">
                <Download size={16} />
                <span>Download Report</span>
              </button>

            </div>

          </section>



          {/* =========================
              TARJETAS DE ESTADÍSTICAS
          ========================== */}
          <section className="grid grid-cols-1 gap-4 rounded-2xl bg-slate-50/0 sm:grid-cols-3">

            {/* Total Sales */}
            <article className="flex items-center gap-4 rounded-2xl bg-white p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <ShoppingCart size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-400">Total Sales</p>

                <div className="flex items-baseline gap-2">
                  <strong className="text-2xl font-bold text-slate-900">263k</strong>

                  <span className="text-xs font-semibold text-emerald-500">
                    ↑ 15.6%
                  </span>
                </div>
              </div>

            </article>


            {/* Total Visitors */}
            <article className="flex items-center gap-4 rounded-2xl bg-white p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <Users size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-400">Total Visitors</p>

                <div className="flex items-baseline gap-2">
                  <strong className="text-2xl font-bold text-slate-900">35k</strong>

                  <span className="text-xs font-semibold text-rose-500">
                    ↓ 6.2%
                  </span>
                </div>
              </div>

            </article>


            {/* Total Orders */}
            <article className="flex items-center gap-4 rounded-2xl bg-white p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <ShoppingBag size={20} />
              </div>

              <div>
                <p className="text-sm text-slate-400">Total Orders</p>

                <div className="flex items-baseline gap-2">
                  <strong className="text-2xl font-bold text-slate-900">165k</strong>

                  <span className="text-xs font-semibold text-emerald-500">
                    ↑ 3.5%
                  </span>
                </div>
              </div>

            </article>

          </section>



          {/* =========================
              CONTENIDO INFERIOR
          ========================== */}
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">


            {/* =========================
                ONLINE STORE SESSIONS
            ========================== */}
            <article className="flex flex-col gap-5 rounded-2xl bg-white p-5 lg:col-span-2">

              {/* Header de la tarjeta */}
              <header className="flex items-center justify-between">

                <h2 className="text-base font-bold text-slate-900">Online Store Sessions</h2>

                <button className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200">
                  View Report
                </button>

              </header>


              {/* Información de visitantes */}
              <section className="flex items-center gap-4 border-b border-slate-100 pb-5">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <Users size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Visitors</p>
                  <strong className="text-2xl font-bold text-slate-900">68</strong>
                </div>

                <div className="ml-auto text-sm font-semibold text-emerald-500">
                  <span>↑ 15.6%</span>
                </div>

              </section>


              {/* Segunda información */}
              <section className="flex items-center gap-3 text-sm">

                <span className="font-bold text-indigo-600">26</span>
                <span className="font-semibold text-rose-500">↓ 1.6%</span>

              </section>


              {/* Gráfico */}
              <section className="flex flex-col gap-4">

                <header className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-700">Sessions Over Time</h3>

                  <button className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                    <CalendarDays size={14} />
                    <span>February</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                </header>


                {/* Aquí posteriormente irá el gráfico */}
                <div className="flex h-48 items-center justify-center rounded-xl bg-gradient-to-b from-indigo-50 to-transparent text-xs text-slate-300">
                  GRAPH
                </div>


                {/* Navegación de fechas */}
                <footer className="flex items-center justify-center gap-2">

                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100">
                    <ChevronLeft size={16} />
                  </button>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">21</button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium text-slate-500 hover:bg-slate-100">22</button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium text-slate-500 hover:bg-slate-100">23</button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium text-slate-500 hover:bg-slate-100">24</button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium text-slate-500 hover:bg-slate-100">25</button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100">
                    <ChevronRight size={16} />
                  </button>

                </footer>

              </section>

            </article>



            {/* =========================
                COLUMNA DERECHA
            ========================== */}
            <section className="flex flex-col gap-4">


              {/* =========================
                  UPGRADE / PROMOTION
              ========================== */}
              <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white">

                <div className="relative z-10 flex flex-col items-start gap-3">

                  <h2 className="text-lg font-bold">Need More Stats?</h2>

                  <p className="text-sm text-indigo-100">
                    Upgrade to pro for added benefits.
                  </p>

                  <button className="mt-1 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600">
                    <Upload size={16} />
                    <span>Go Pro Now</span>
                  </button>

                </div>

                <Upload
                  size={90}
                  className="pointer-events-none absolute -right-3 -top-3 rotate-12 text-white/10"
                />

              </article>



              {/* =========================
                  CONVERSION
              ========================== */}
              <article className="flex flex-1 flex-col gap-5 rounded-2xl bg-white p-5">

                <header>
                  <h2 className="text-base font-bold text-slate-900">Conversion</h2>
                </header>


                {/* Gráfico de conversión */}
                <section className="flex flex-col items-center gap-1 py-2">

                  <div
                    className="flex h-32 w-56 items-end justify-center rounded-t-full border-[14px] border-b-0 border-indigo-500 pb-2 text-2xl font-bold text-slate-900"
                    style={{ borderRightColor: "rgba(99,102,241,0.2)" }}
                  >
                    58,19%
                  </div>

                  <span className="text-xs font-semibold text-emerald-500">
                    ↑ 3.5%
                  </span>

                </section>


                {/* Income / Expenses */}
                <footer className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm">

                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <span className="text-emerald-500">↙</span>
                      Income
                    </span>
                    <strong className="text-sm font-bold text-slate-900">$542,317</strong>
                  </div>

                  <div className="flex flex-col gap-1 text-right">
                    <span className="flex items-center justify-end gap-1 text-xs text-slate-400">
                      <span className="text-rose-500">↗</span>
                      Expences
                    </span>
                    <strong className="text-sm font-bold text-slate-900">$497,456</strong>
                  </div>

                </footer>

              </article>

            </section>

          </section>

        </main>

      </div>

    </body>
  );
}