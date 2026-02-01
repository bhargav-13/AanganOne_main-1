function Card({ title, description, icon, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      {icon && !image && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      <h3 className="text-xl font-semibold mb-2" style={{ color: '#473F52' }}>{title}</h3>
      <p style={{ color: '#77787C' }}>{description}</p>
    </div>
  );
}

export default Card;

