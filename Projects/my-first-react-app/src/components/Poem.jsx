const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

export default function Poem({ lines }) {
    return (
        <article>
            {lines.map((line, index) =>
                <>
                    <p key={index}>
                        {line}
                    </p>
                    {index !== lines.length - 1 ? <hr/> : null }
                    
                    
                </>

            )}
        </article>
    );
}