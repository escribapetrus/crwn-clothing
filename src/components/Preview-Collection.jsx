import React from 'react'

function PreviewCollection({title, items, id}) {
    return (
        <div>
            {items
            .filter((item, idx) => idx < 4)
            .map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default PreviewCollection
