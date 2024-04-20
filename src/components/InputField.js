import './inputField.css';

function InputField({ label, type, name, value, onChange, error }) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} className={error ? 'error' : ''} />
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}

export default InputField;
