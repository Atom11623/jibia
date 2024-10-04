// Sample Admin Credentials
const adminUsername = 'Gama1162';
const adminPassword = '123456789';

// Function to handle admin login
function adminLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminUsername && password === adminPassword) {
        alert('Login successful!');
        document.getElementById('adminPanel').style.display = 'block'; // Show admin panel
        document.getElementById('loginForm').style.display = 'none'; // Hide login form
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}

// Sample function to handle order submission
function submitOrder() {
    // Logic for submitting an order
    alert('Order submitted!');
}

// Sample function to display orders
function displayOrders() {
    // Logic to display orders in the orders table
}

// Sample event listener for the login form
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    adminLogin(); // Call the login function
});

// Sample event listener for order submission
document.getElementById('orderButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    submitOrder(); // Call the order submission function
});

// Sample local government data
const localGovernments = {
    "Abia": ["Aba North", "Aba South", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Obingwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"],
    "Adamawa": ["Demsa", "Fufore", "Girei", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
    "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offong/Oruko", "Uyo"],
    "Anambra": ["Aguata", "Awka North", "Awka South", "Anambra East", "Anambra West", "Anaocha", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
    "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"],
    "Bayelsa": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
    "Benue": ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"],
    "Borno": ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"],
    "Cross River": ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"],
    "Delta": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"],
    "Ebonyi": ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaukwu", "Onicha"],
    "Edo": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba-Okha", "Orhionmwon", "Oredo", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"],
    "Ekiti": ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
    "Enugu": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"],
    "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"],
    "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Onuimo", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West"],
    "Jigawa": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Malam Madori", "Miga", "Ringim", "Sule Tankarkar", "Taura", "Yankwashi"],
    "Kaduna": ["Birnin Gwari", "Chikun", "Giwa", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"],
    "Kano": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Dala", "Dawakin Kudu", "Dawakin Tofa", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kiru", "Kumbotso", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rogo", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"],
    "Kogi": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Igalamela-Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa-Muro", "Ofu", "Ogori-Magongo", "Okene", "Okehi", "Olamaboro", "Pategi", "Yagba East", "Yagba West"],
    "Kwara": ["Asa", "Baruten", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"],
    "Lagos": ["Agege", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Banjoko", "Bariga", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Somolu", "Surulere"],
    "Nasarawa": ["Akwanga", "Doma", "Karu", "Keana", "Keffi", "Nasarawa", "Nasarawa Eggon", "Obi", "Toto", "Wamba"],
    "Niger": ["Agaie", "Agwara", "Bida", "Borgu", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Mashegu", "Mokwa", "Paikoro", "Rafi", "Rayyan", "Shiroro", "Suleja", "Tafa", "Wushishi"],
    "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Egbado North", "Egbado South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu Ode", "Obafemi-Owode", "Odeda", "Odogbolu", "Remo North", "Sagamu", "Yewa North", "Yewa South"],
    "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Odigbo", "Ondo East", "Ondo West", "Ose", "Owo"],
    "Osun": ["Aiyedade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boripe", "Ife East", "Ife North", "Ife South", "Ife Central", "Ilesha East", "Ilesha West", "Isokan", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Osogbo", "Ola Oluwa"],
    "Oyo": ["Akinyele", "Atiba", "Afijio", "Egbeda", "Ibadan North", "Ibadan North East", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Iseyin", "Itesiwaju", "Ogbomosho North", "Ogbomosho South", "Oyo East", "Oyo West", "Saki East", "Saki West"],
    "Plateau": ["Bokkos", "Jos East", "Jos North", "Jos South", "Kanke", "Langtang North", "Langtang South", "Mangu", "Pankshin", "Quan Pan", "Riyom", "Shendam", "Wase"],
    "Rivers": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Emohua", "Eleme", "Etche", "Gokana", "Ikwerre", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Port Harcourt", "Tai"],
    "Sokoto": ["Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Illela", "Kebbe", "Kware", "Rabah", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Wamako", "Wurno", "Yabo"],
    "Taraba": ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kona", "Lau", "Sardauna", "Takum", "Ussa", "Wukari"],
    "Yobe": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Jakusko", "Karasuwa", "Nguru", "Potiskum", "Tarmua", "Yunusari"],
    "Zamfara": ["Anka", "Bakura", "Birnin Magaji", "Bukkuyum", "Gummi", "Gusau", "Maradun", "Shinkafi", "Talata Mafara", "Zumi"]
};

// Event listener for local government selection
document.getElementById('stateSelect').addEventListener('change', function () {
    const state = this.value;
    const lgas = localGovernments[state] || [];
    const lgaSelect = document.getElementById('lgaSelect');

    lgaSelect.innerHTML = ''; // Clear previous options

    lgas.forEach(lga => {
        const option = document.createElement('option');
        option.value = lga;
        option.textContent = lga;
        lgaSelect.appendChild(option);
    });
});

// Display the login form
function displayLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('adminPanel').style.display = 'none';
}

// Initialize the login form
displayLoginForm();
