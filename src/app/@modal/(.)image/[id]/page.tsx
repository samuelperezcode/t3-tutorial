import { FullPageImageView } from "~/app/_components/full-page-image-view"
import { Modal } from "~/app/_components/modal"

export default  function ImageModal({params:{id: imageId}}:{params:{id: string}}) {
  return (
    <Modal>
      <FullPageImageView id={imageId} />
    </Modal>
  )
}