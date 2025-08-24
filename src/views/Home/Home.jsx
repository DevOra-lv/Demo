import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate()
    const items = [
        { title: "Default", path: "/default" },
        { title: "Alain", path: "/alain" },
    ];
    return(
        <div className="mx-auto w-3xl p-6">
            <div className="grid grid-cols-3 gap-6">
                {items.map(({ title, path }, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center justify-center cursor-pointer border rounded-lg p-4 hover:bg-blue-100 transition"
                    onClick={() => navigate(path)}
                >
                    <div className="mt-2 text-xl font-semibold">{title}</div>
                </div>
                ))}
            </div>
        </div>
    )
}