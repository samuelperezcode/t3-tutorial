import { getImage } from "~/server/queries"
import Image from "next/image"

export async function FullPageImageView({id: imageId}:{id: string}) {
  const idAsNumber = Number(imageId)
  const image = await getImage({imageId: idAsNumber})
  return (
    <Image src={image.url} alt={image.name} width={512} height={512} />
  )
}