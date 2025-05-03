
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Les tendances du marché immobilier en 2025",
    excerpt: "Découvrez les évolutions du marché immobilier et les opportunités à saisir pour vos investissements futurs.",
    content: "Le marché immobilier en 2025 se caractérise par plusieurs tendances marquantes qui influencent tant les acheteurs que les vendeurs. Premièrement, l'attrait pour les espaces verts et les logements éco-responsables continue de croître, reflétant une conscience environnementale accrue chez les acquéreurs. Deuxièmement, la digitalisation des processus d'achat et de vente s'est accélérée, permettant des transactions plus fluides et transparentes. Troisièmement, les zones périurbaines maintiennent leur attractivité, offrant un équilibre entre qualité de vie et proximité des centres urbains. Enfin, l'investissement dans les résidences secondaires connaît un regain d'intérêt, notamment dans les régions offrant un cadre de vie agréable et des possibilités de télétravail.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    date: "28 avril 2025",
    author: "Michel Durand"
  },
  {
    id: 2,
    title: "Comment valoriser votre bien avant la vente ?",
    excerpt: "Nos conseils d'experts pour mettre en valeur votre propriété et maximiser son prix de vente sur le marché.",
    content: "La valorisation d'un bien immobilier avant sa mise en vente est une étape cruciale pour maximiser son prix. Commencez par désencombrer et dépersonnaliser les espaces pour permettre aux potentiels acheteurs de se projeter. Investissez dans des réparations mineures qui ont un impact visuel significatif : peinture fraîche, remplacement des poignées défectueuses ou rénovation des joints de salle de bain. L'éclairage joue également un rôle essentiel : privilégiez la lumière naturelle et complétez avec des luminaires stratégiquement placés. Ne négligez pas l'extérieur, car la première impression est déterminante : un jardin bien entretenu et une façade propre augmentent considérablement l'attrait du bien. Enfin, envisagez de faire appel à un professionnel du home staging pour une mise en scène optimale qui révélera tout le potentiel de votre propriété.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "15 avril 2025",
    author: "Sophie Martin"
  },
  {
    id: 3,
    title: "Investir dans l'immobilier de luxe : guide pratique",
    excerpt: "Tout ce que vous devez savoir pour réussir vos investissements dans le secteur de l'immobilier haut de gamme.",
    content: "L'investissement dans l'immobilier de luxe requiert une approche spécifique et une connaissance approfondie de ce segment particulier du marché. Avant tout, il est essentiel de comprendre les facteurs qui définissent la valeur d'un bien de prestige : l'emplacement reste primordial, mais l'architecture, l'histoire du bâtiment, les matériaux utilisés et les prestations exclusives jouent également un rôle déterminant. La rentabilité d'un investissement de luxe s'évalue différemment des biens standards : si le rendement locatif peut paraître plus faible en pourcentage, la stabilité de l'investissement et son potentiel de plus-value à long terme sont généralement supérieurs. Pour réussir dans ce segment, construisez un réseau solide d'experts (agents spécialisés, notaires, architectes) et restez informé des tendances qui façonnent les attentes de la clientèle fortunée. Enfin, n'oubliez pas que la patience est de mise : les transactions dans le segment du luxe prennent souvent plus de temps, mais peuvent offrir des opportunités exceptionnelles pour les investisseurs avisés.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "3 avril 2025",
    author: "Antoine Leclerc"
  },
  {
    id: 4,
    title: "Acheter ou louer ? Comment faire le bon choix",
    excerpt: "Analyse comparative pour vous aider à prendre la décision qui correspond le mieux à votre situation personnelle.",
    content: "La question d'acheter ou de louer est complexe et dépend de nombreux facteurs personnels et financiers. Sur le plan financier, l'achat représente un investissement patrimonial qui vous protège contre l'inflation des loyers et offre une sécurité à long terme, mais nécessite une capacité d'endettement, des frais initiaux importants et vous expose aux risques de dépréciation. La location, quant à elle, offre une flexibilité géographique, moins de responsabilités de maintenance et une absence d'endettement, mais constitue une dépense sans constitution de patrimoine. Votre choix devrait tenir compte de votre stabilité professionnelle, de vos projets de vie à moyen terme et de la dynamique du marché immobilier local. Un calcul précis du point d'équilibre financier entre achat et location dans votre situation spécifique vous aidera à prendre une décision éclairée, potentiellement avec l'aide d'un conseiller financier spécialisé.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    date: "27 mars 2025",
    author: "Marie Dupont"
  },
  {
    id: 5,
    title: "Les quartiers émergents à surveiller en 2025",
    excerpt: "Découvrez les zones en plein développement qui offrent les meilleures opportunités d'investissement.",
    content: "Les quartiers émergents de 2025 présentent des opportunités d'investissement attractives avant que les prix n'atteignent leur plein potentiel. Ces zones se caractérisent par des projets de rénovation urbaine ambitieux, l'arrivée de nouvelles infrastructures de transport qui améliorent significativement la connectivité, et un écosystème commercial en plein essor avec l'installation de boutiques, restaurants et espaces culturels. On observe également une démographie en évolution, avec l'arrivée de jeunes professionnels et de familles attirés par des prix encore accessibles. Les indices révélateurs d'un quartier prometteur incluent l'augmentation des demandes de permis de construire, l'installation d'écoles de qualité, et les investissements publics dans les espaces verts et équipements communautaires. Pour maximiser votre retour sur investissement, recherchez ces signes précurseurs et n'hésitez pas à vous projeter sur le long terme, car la transformation complète d'un quartier peut prendre 5 à 10 ans.",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    date: "15 mars 2025",
    author: "Thomas Moreau"
  },
  {
    id: 6,
    title: "L'impact de la domotique sur la valeur immobilière",
    excerpt: "Comment les technologies intelligentes peuvent augmenter l'attractivité et le prix de votre propriété.",
    content: "La domotique exerce aujourd'hui une influence croissante sur la valeur des biens immobiliers, avec un impact qui varie selon le type d'installations et les attentes du marché cible. Les systèmes qui augmentent l'efficacité énergétique, comme les thermostats intelligents et l'éclairage automatisé, peuvent réduire significativement les coûts d'exploitation et attirer les acheteurs soucieux de l'environnement. Les équipements de sécurité connectés (serrures intelligentes, vidéosurveillance accessible à distance) ajoutent une valeur substantielle en répondant aux préoccupations de sécurité des acquéreurs potentiels. Pour maximiser le retour sur investissement, privilégiez les systèmes compatibles avec les principales plateformes (Apple HomeKit, Google Home, Amazon Alexa) et faciles à utiliser. Évitez les technologies trop personnalisées ou complexes qui pourraient rebuter certains acheteurs. Un équilibre judicieux consiste à investir dans des installations qui améliorent le confort quotidien tout en étant suffisamment intuitives pour séduire le plus grand nombre.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2 mars 2025",
    author: "Julie Lefèvre"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-beige-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Conseils Immobiliers</h1>
              <p className="text-xl text-muted-foreground">
                Découvrez nos articles et conseils d'experts pour réussir vos projets immobiliers
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="border-none overflow-hidden hover-lift elegant-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                      <p className="text-sm text-accent">{post.author}</p>
                    </div>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blog/${post.id}`} className="text-accent hover:text-accent/80 font-medium">
                      Lire la suite →
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-beige-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Restez informé</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Abonnez-vous à notre newsletter pour recevoir nos derniers articles et conseils immobiliers directement dans votre boîte mail.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-md border border-beige-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  S'abonner
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                En vous abonnant, vous acceptez de recevoir nos communications. Vous pourrez vous désabonner à tout moment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
