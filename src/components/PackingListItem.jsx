export default function PackingListItem({ index, name, isPacked, onToggle }) {
    return (
        <li onClick={() => onToggle(index)}>{name} {isPacked && '✔'}</li>
    )
}