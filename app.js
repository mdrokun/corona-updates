fetch("https://corona.lmao.ninja/v2/countries/china")
    .then((res) => res.json())
    .then((res) => {
        const countryDetails = {
            country: res.country,
            cases: res.cases,
            todayCases: res.todayCases,
            deaths: res.deaths,
            todayDeaths: res.todayDeaths,
            recovered: res.recovered,
            active: res.active,
            critical: res.critical,
            casesPerOneMillion: res.casesPerOneMillion,
            deathsPerOneMillion: res.deathsPerOneMillion,
            tests: res.tests,
            testsPerOneMillion: res.testsPerOneMillion,
            updated: res.updated,
        };

        handleRender(countryDetails);

        setInterval(() => {
            handleRender(countryDetails);
        }, 5000);
    });

const handleRender = ({
    country,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical,
    casesPerOneMillion,
    deathsPerOneMillion,
    tests,
    testsPerOneMillion,
    updated,
}) => {
    const dateObject = new Date(updated);
    const humanDateFormat = dateObject.toLocaleString();

    document.getElementById("app").innerHTML = `
        <header>
            <img src="img.png">
            <div class="titles">
                <h1>${country}</h1>
                <h2>Corona Updates</h2>
            </div>
        </header>

        <div class="wrapper">
            <div class="w-50">
                <h3>Total Cases</h3>
                <h4>${cases}</h4>
            </div>

            <div>
                <h3>New Cases</h4>
                <h4>${todayCases}</h4>
            </div>

            <div>
                <h3>Total Deaths</h4>
                <h4>${deaths}</h4>
            </div>

            <div>
                <h3>New Deaths</h4>
                <h4>${todayDeaths}</h4>
            </div>

            <div>
                <h3>Total Recovered</h4>
                <h4>${recovered}</h4>
            </div>

            <div>
                <h3>Active Cases</h4>
                <h4>${active}</h4>
            </div>

            <div>
                <h3>Serious Critical</h4>
                <h4>${critical}</h4>
            </div>

            <div>
                <h3>Cases Per One Million</h4>
                <h4>${casesPerOneMillion}</h4>
            </div>

            <div>
                <h3>Deaths Per One Million</h4>
                <h4>${deathsPerOneMillion}</h4>
            </div>

            <div>
                <h3>Total Tests</h4>
                <h4>${tests}</h4>
            </div>

            <div>
                <h3>Tests Per One Million</h4>
                <h4>${testsPerOneMillion}</h4>
            </div>
        </div>

        <div class="update-date">
            <h3>Last Update</h3>
            <h4>${humanDateFormat}</h4>
        </div>
    `;
};
