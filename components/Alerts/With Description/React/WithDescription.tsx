import AlertIcon from "./AlertIcon"

export default function WithDescritption() {
    return (
        <div
            className="mt-10 flex h-full w-full items-center justify-center px-3"
            >
            <div
                className="flex min-w-[296px] max-w-[864px] items-start bg-yellow-50 p-4"
                >
                <div
                    className="mr-3 max-h-[20px] min-w-[20px] pt-1 text-yellow-500"
                    >
                    <AlertIcon></AlertIcon>
                </div>
                <div
                    className="max-h-[108px] min-h-[68px]"
                    >
                    <h3
                        className="mb-2 font-medium text-yellow-800"
                        >Attention needed</h3>
                    <p
                        className="text-yellow-700"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
                </div>
            </div>
        </div>
    )
}