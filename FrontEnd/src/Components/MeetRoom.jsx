import './MeetRoom.css';

function MeetingRoom() {

    return(
        <>
        <div className="wrapper">
            <div className='section-2' id='meetingRoom'>
                <div className='meetingRoom-bgd-img'></div>
            </div>
            <div className="meetingRoom-sub sub">
                <div className='meetingRoom-text text'>
                    <h1>Mötesrum Slottet</h1><br />

                    <p>Mötesrum utöver det vanliga</p><br />

                    <p>Byt miljö och boka mötesrum hos oss!</p>

                    <p>Ett mötesrum utöver det vanliga, måste upplevas.</p>
                    <p>Du hittar oss i mysiga Tändsticksområdet, i en lugn och unik miljö.</p>
                    <p>Trevliga restauranger runt hörnet och nära till tåg och buss.</p><br /><br />

                    <p>Heldag 3 000 kr</p>
                    <p>Halvdag 1 800 kr</p>
                    <p>Helgdag 4 000 kr</p><br />

                    <p>Det finns Wifi, bildskärm, whiteboard. Fika eller lunch kan ni boka via oss</p><br />

                    <p>(priser exklusive moms)</p>
                </div>
            </div>
            <div className="section-2-2">
                <div className='meetRoom-post-img'></div>
            </div>
        </div>
        </>
    );

}

export default MeetingRoom;