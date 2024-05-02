import Image from "next/image"
import { getImage } from "~/server/queries"

export default async function ImageModal({params:{id: imageId}}:{params:{id: string}}) {
  const idAsNumber = Number(imageId)
  const image = await getImage({imageId: idAsNumber})
  return (
    <div>
      <Image src={image.url} alt={image.name} width={124} height={124} />
    </div>
  )
}