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
    <body>

      {/* =========================
          BARRA SUPERIOR
      ========================== */}
      <header>
        <nav>

          {/* Logo */}
          <div>
            <div>
              R
            </div>

            <span>flex</span>
          </div>


          {/* Buscador */}
          <div>

            <button>
              <ArrowLeft />
            </button>

            <div>
              <Search />
              <input
                type="text"
                placeholder="Search"
              />
            </div>

          </div>


          {/* Información del usuario */}
          <div>

            {/* Notificaciones */}
            <button>
              <Bell />
            </button>


            {/* Balance */}
            <div>
              <p>Your Balance</p>
              <p>$5.456</p>
            </div>


            {/* Avatar */}
            <div>
              <CircleUserRound />
            </div>

            <p>Hi, Lay</p>

          </div>

        </nav>
      </header>


      {/* =========================
          CONTENIDO DE LA APLICACIÓN
      ========================== */}
      <div>


        {/* =========================
            BARRA LATERAL
        ========================== */}
        <aside>

          {/* Menu */}
          <div>

            <p>Menu</p>


            {/* Dashboard */}
            <button>
              <Home />
              <span>Dashboard</span>
            </button>


            {/* Orders */}
            <button>
              <ShoppingBag />
              <span>Orders</span>
              <ChevronDown />
            </button>


            {/* Products */}
            <button>
              <Package />
              <span>Products</span>
              <ChevronDown />
            </button>


            {/* Analytics */}
            <button>
              <BarChart3 />
              <span>Analytics</span>
            </button>


            {/* Marketing */}
            <button>
              <Megaphone />
              <span>Marketing</span>
              <ChevronDown />
            </button>


            {/* Messages */}
            <button>
              <MessageCircle />
              <span>Messages</span>

              {/* Número de mensajes */}
              <span>25</span>
            </button>

          </div>


          {/* Integraciones */}
          <div>

            <p>Integrations</p>

            <button>
              <span>◆</span>
              <span>Jira</span>
            </button>

            <button>
              <span>✣</span>
              <span>Slack</span>
            </button>

            <button>
              <span>▣</span>
              <span>Intercom</span>
            </button>

          </div>


          {/* Logout */}
          <button>
            <LogOut />
            <span>Logout</span>
          </button>

        </aside>



        {/* =========================
            CONTENIDO PRINCIPAL
        ========================== */}
        <main>


          {/* =========================
              CABECERA DEL DASHBOARD
          ========================== */}
          <section>

            {/* Título */}
            <div>

              <div>
                <Home />
              </div>

              <h1>Dashboard</h1>

            </div>


            {/* Acciones */}
            <div>

              {/* Selector de fecha */}
              <button>
                <CalendarDays />
                <span>This Month</span>
                <ChevronDown />
              </button>


              {/* Descargar reporte */}
              <button>
                <Download />
                <span>Download Report</span>
              </button>

            </div>

          </section>



          {/* =========================
              TARJETAS DE ESTADÍSTICAS
          ========================== */}
          <section>

            {/* Total Sales */}
            <article>

              <div>
                <ShoppingCart />
              </div>

              <div>
                <p>Total Sales</p>

                <div>
                  <strong>263k</strong>

                  <span>
                    ↑ 15.6%
                  </span>
                </div>
              </div>

            </article>


            {/* Total Visitors */}
            <article>

              <div>
                <Users />
              </div>

              <div>
                <p>Total Visitors</p>

                <div>
                  <strong>35k</strong>

                  <span>
                    ↓ 6.2%
                  </span>
                </div>
              </div>

            </article>


            {/* Total Orders */}
            <article>

              <div>
                <ShoppingBag />
              </div>

              <div>
                <p>Total Orders</p>

                <div>
                  <strong>165k</strong>

                  <span>
                    ↑ 3.5%
                  </span>
                </div>
              </div>

            </article>

          </section>



          {/* =========================
              CONTENIDO INFERIOR
          ========================== */}
          <section>


            {/* =========================
                ONLINE STORE SESSIONS
            ========================== */}
            <article>

              {/* Header de la tarjeta */}
              <header>

                <h2>Online Store Sessions</h2>

                <button>
                  View Report
                </button>

              </header>


              {/* Información de visitantes */}
              <section>

                <div>
                  <Users />
                </div>

                <div>
                  <p>Visitors</p>
                  <strong>68</strong>
                </div>

                <div>
                  <span>↑ 15.6%</span>
                </div>

              </section>


              {/* Segunda información */}
              <section>

                <span>26</span>
                <span>↓ 1.6%</span>

              </section>


              {/* Gráfico */}
              <section>

                <header>
                  <h3>Sessions Over Time</h3>

                  <button>
                    <CalendarDays />
                    <span>February</span>
                    <ChevronDown />
                  </button>
                </header>


                {/* Aquí posteriormente irá el gráfico */}
                <div>
                  GRAPH
                </div>


                {/* Navegación de fechas */}
                <footer>

                  <button>
                    <ChevronLeft />
                  </button>

                  <button>21</button>
                  <button>22</button>
                  <button>23</button>
                  <button>24</button>
                  <button>25</button>

                  <button>
                    <ChevronRight />
                  </button>

                </footer>

              </section>

            </article>



            {/* =========================
                COLUMNA DERECHA
            ========================== */}
            <section>


              {/* =========================
                  UPGRADE / PROMOTION
              ========================== */}
              <article>

                <div>

                  <h2>Need More Stats?</h2>

                  <p>
                    Upgrade to pro for added benefits.
                  </p>

                  <button>
                    <Upload />
                    <span>Go Pro Now</span>
                  </button>

                </div>

              </article>



              {/* =========================
                  CONVERSION
              ========================== */}
              <article>

                <header>
                  <h2>Conversion</h2>
                </header>


                {/* Gráfico de conversión */}
                <section>

                  <div>
                    58,19%
                  </div>

                  <span>
                    ↑ 3.5%
                  </span>

                </section>


                {/* Income / Expenses */}
                <footer>

                  <div>
                    <span>↙</span>
                    <span>Income</span>
                    <strong>$542,317</strong>
                  </div>

                  <div>
                    <span>↗</span>
                    <span>Expenses</span>
                    <strong>$497,456</strong>
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