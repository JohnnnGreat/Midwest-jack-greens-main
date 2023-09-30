export function Success({ message }) {
  return (
    <div className="success">
      <p>${message}</p>
    </div>
  );
}

export function Loading({ message }) {
  return (
    <div className="loading">
      <p>{`${message}`}</p>
    </div>
  );
}

export function Error({ message }) {
  return (
    <div className="error">
      <p>{`${message}`}</p>
    </div>
  );
}
