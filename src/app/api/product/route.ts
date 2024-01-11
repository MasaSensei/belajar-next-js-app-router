import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Air Force 1 '07",
    price: 1909000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_441,c_limit/a8254cc4-b776-47b2-898f-7e6e1f564c94/air-force-1-07-shoes-RgcF1Q.png",
  },
  {
    id: 2,
    title: "Nike Air Force 1 '07",
    price: 1939000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_441,c_limit/7cd4c8ff-8671-4a41-a511-da2492badefa/air-force-1-07-shoes-dTN9bg.png",
  },
  {
    id: 3,
    title: "Nike Air Force 1 '07",
    price: 1729000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_441,c_limit/192fd022-6950-4373-96e5-289092314a7d/air-force-1-07-shoes-rKDDnV.png",
  },
  {
    id: 4,
    title: "Nike Air Force 1 '07",
    price: 1729000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_441,c_limit/192fd022-6950-4373-96e5-289092314a7d/air-force-1-07-shoes-rKDDnV.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    } else {
      return NextResponse.json({ status: 404, message: "product not found" });
    }
  }
  const products = await retrieveData("products");
  return NextResponse.json({ status: 200, message: "success", data: products });
}
