import Details from "../components/Details";
import ProductView from "../components/ProductView";
import { Charts } from "../components/Charts";
import { Separator } from "@/components/ui/separator";
import Scene from "../components/ShoeModel";
import Comment from "../components/Comment";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export const products = [
  { id: "1", name: "Nike Air Max", price: 120 },
  { id: "2", name: "Adidas UltraBoost", price: 150 },
  { id: "3", name: "Puma RS-X", price: 100 },
];

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  return {
    title: product ? product.name : "Product Not Found",
    description: "A Market for buying best shoes",
  };
}
export default async function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="my-20 min-h-screen">
      <ProductView />
      <Separator className="my-10" />
      <Details />
      <Separator className="my-10" />
      <Charts />
      <Scene />
      <Separator className="my-10" />
      <Comment />
    </div>
  );
}
