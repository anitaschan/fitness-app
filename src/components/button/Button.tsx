import './Button.css'

export const Button = ({ label }: { label: string }) => {
    return (
        <button className="button">{label}</button>
    )
}