import { getImage } from "~/server/queries"
import Image from "next/image"

export default async function ImagePage({params:{id: imageId}}:{params:{id: string}}) {
  const idAsNumber = Number(imageId)
  const image = await getImage({imageId: idAsNumber})
  return (
    <div>
      <Image src={image.url} alt={image.name} width={124} height={124} />
    </div>
  )
}