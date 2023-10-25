
import React from 'react'

const Clock = () => {
    return (
        <div>
            <h2>
                {/* toLocaleString()=Geçerli veya belirtilen yerel ayarı kullanarak bir
                 tarih ve saati bir dizeye dönüştürür */}
                {new Date().toLocaleString()}
            </h2>
        </div>
    )
}

export default Clock