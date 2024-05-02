import { FullPageImageView } from "~/app/_components/full-page-image-view";

export default function ImagePage({params:{id: imageId}}:{params:{id: string}}) {
  return (
    <section className="flex flex-col justify-center items-center">
      <article className="pt-16 flex flex-col justify-start gap-8">
        <FullPageImageView id={imageId} />
      </article>
    </section>
  )
}