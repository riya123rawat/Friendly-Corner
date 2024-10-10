import './Prices.css'

function Prices() {

    return(
    <>
    <div className='section-3 fade-comp' id='prices'>
        <div className='pr-bgd-img'></div>
        <div className='pr-title'><h1>¤ &nbsp; &nbsp; Prices &nbsp; &nbsp; ¤</h1></div>
        <div className='pr-tables'>
          <table>
            <thead>
                <tr>
                    <th><h2>Fixed office</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>3 850 kr / mån</td>
                </tr>
                <tr>
                    <td>__</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th><h2>Två dagar i veckan</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2 800 kr / mån</td>
                </tr>
                <tr>
                    <td>__</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th><h2>En dag i veckan</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1 700 kr / mån</td>
                </tr>
            </tbody>
          </table>

          <div className='tbl-spacer'></div>

          <table>
            <thead>
                <tr>
                    <th><h2>Mötesrum</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Helgdag från 4 000 kr</td>
                </tr>
                <tr>
                    <td>Heldag 3 500 kr</td>
                </tr>
                <tr>
                    <td>Halvdag 1 900 kr</td>
                </tr>
                <tr>
                    <td>500 kr / tim</td>
                </tr>
            </tbody>
          </table>

          <div className='tbl-spacer'></div>

          <table>
            <thead>
                <tr>
                    <th><h2>Fototstudio</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Heldag 2 950 kr</td>
                </tr>
                <tr>
                    <td>Halvdag 1 700 kr</td>
                </tr>
                <tr>
                    <td>950 kr / 2 tim</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className='included'>
          <h2>This is included in the rent</h2>
          <h3>Height-adjustable desk and work chair from Kinnarps • Lockable cabinet/storage • Free access to the meeting rooms</h3>
          <h3>• Kitchen/lunch room • Fast Wi-Fi • 24/7 access • Breakfast • coffee/tea, fruit </h3>
          <h3>• Cleaning • Close to the station and good restaurants</h3>
          <br />
          <h3>• Last but not least, nice colleagues!</h3>
        </div>
    </div>    
    </>
    );
};

export default Prices;