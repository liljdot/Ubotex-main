const Test: React.FC = () => {
const env = process.env.NODE_ENV
    
    return (
        <>
            <h1 className="bg-gradient-to-r from-red-500 via-red-500 via-50% to-blue-500 to-50%">This is the test Page</h1>
            <h1 className="text-5xl">environment: {env}</h1>
        </>
    )
}

export default Test;