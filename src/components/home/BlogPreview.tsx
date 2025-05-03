
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Les tendances du marché immobilier en 2025",
    excerpt: "Découvrez les évolutions du marché immobilier et les opportunités à saisir pour vos investissements futurs.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    date: "28 avril 2025",
  },
  {
    id: 2,
    title: "Comment valoriser votre bien avant la vente ?",
    excerpt: "Nos conseils d'experts pour mettre en valeur votre propriété et maximiser son prix de vente sur le marché.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "15 avril 2025",
  },
  {
    id: 3,
    title: "Investir dans l'immobilier de luxe : guide pratique",
    excerpt: "Tout ce que vous devez savoir pour réussir vos investissements dans le secteur de l'immobilier haut de gamme.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "3 avril 2025",
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conseils Immobiliers
          </h2>
          <p className="text-lg text-muted-foreground">
            Retrouvez nos derniers articles et conseils d'experts pour vous guider dans vos projets immobiliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-bold">{post.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to="/blog" className="text-accent hover:text-accent/80 font-medium">
                  Lire la suite →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Voir tous les articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
