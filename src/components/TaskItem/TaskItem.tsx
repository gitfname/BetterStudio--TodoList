
interface Props {
    id: string;
    content: string;
    isComplete: boolean;
}

function TaskItem({ id, content, isComplete }: Props) {
    return (
        <div className="flex items-center gap-x-2 justify-between group bg-white/80 rounded-md p-[12px_10px_12px_10px]
        border border-[#F3E1DF]">

            <input type="checkbox" checked={isComplete} className="checkbox checkbox-xs rounded-sm checkbox-success border-transparent/30" />

            <p
                className="text-sm text-[#3A3A3A] font-normal flex-1"
            >
                {content}
            </p>

            <button
                className="appearance-none border-none outline-none"
            >
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-colors" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12.1218" y="3.63655" width="1.71429" height="12" rx="0.857143" transform="rotate(45 12.1218 3.63655)" fill="#F4C5CB" />
                    <rect x="3.63656" y="4.84873" width="1.71429" height="12" rx="0.857143" transform="rotate(-45 3.63656 4.84873)" fill="#F4C5CB" />
                </svg>
            </button>

        </div>
    )
}

export default TaskItem