const Test: React.FC = () => {
const env = process.env.NODE_ENV
    
    return (
        <>
            <h1 className="bg-amber-50">This is the test Page</h1>
            <h1>environment: {env}</h1>
        </>
    )
}

export default Test;