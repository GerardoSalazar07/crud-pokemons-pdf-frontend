import { Spinner } from "keep-react"

export default function SpinnerComponent () {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center z-[100]">
            <Spinner color="failure" size="xl" />
        </div>
    )
}