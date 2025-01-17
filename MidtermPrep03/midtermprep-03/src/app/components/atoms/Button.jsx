export default function Button({ onClick, children, disabled, className }) {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
}