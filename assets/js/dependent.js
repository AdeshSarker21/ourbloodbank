// Division Section select
function divisionsList() {
    // get value from division lists
    var diviList = document.getElementById('divisions').value;
    // set Rangpur division districts
    if (diviList == 'Rangpur') {
        var disctList = '<option disabled selected>জেলা নির্বাচন করুন</option><option value="Nilphamari">নীলফামারী</option><option value="Rangpur">রংপুর</option><option value="Dinajpur">দিনাজপুর</option><option value="Gaibandha">গাইবান্ধা</option><option value="Kurigram">কুড়িগ্রাম</option><option value="Lalmonirhat">লামনিরহাট</option><option value="Panchagarh">পঞ্চগড়</option><option value="Thakurgaon">ঠাকুরগাঁও</option>';
    }

    // set Dhaka division districts
    else if (diviList == 'Dhaka') {
        var disctList = '<option disabled selected>জেলা নির্বাচন করুনt</option><option value="Dhaka">ঢাকা</option><option value="Faridpur">ফরিদুপুর</option><option value="Gazipur">গাজীপুর</option><option value="Gopalganj">গোপালগঞ্জ</option><option value="Kishoreganj">কিশোরগঞ্জো</option><option value="Madaripur">মাদারীপুর</option><option value="Manikganj">মানিকগঞ্জ</option><option value="Munshiganj">মুন্সিগঞ্জ</option><option value="Narayanganj">নারায়গঞ্জ</option><option value="Narsingdi">নরসিংদি</option><option value="Rajbari">রাজবাড়ী</option><option value="Shariatpur">শরীয়দপুর</option><option value="Tangail">টাঙ্গাইল</option>';
    }
    // set Chattogram division districts
    else if (diviList == 'Chattogram') {
        var disctList = '<option disabled selected>জেলা নির্বাচন করুন</option><option value="Bandarban">বান্দরবান</option><option value="Chandpur">চাঁদপুর</option><option value="Chattogram">চট্টগ্রাম</option><option value="Cumilla">কুমিল্লা</option><option value="Cox\'s Bazar">কক্সবাজার</option><option value="Feni">ফেনি</option><option value="Khagrachhari">খাগড়াছড়ি</option><option value="Noakhali">নোহাখালী</option><option value="Rangamati">রাঙ্গামাটি</option><option value="Lakshmipur">লক্ষিপুর</option>';
    }
    // set Barishal division districts
    else if (diviList == 'Barishal') {
        var disctList = '<option disabled selected>জেলা নির্বাচন করুন</option><option value="Barguna">বরগুনা</option><option value="Barishal">বরিশাল</option><option value="Bhola">ভোলা</option><option value="Jhalokati">ঝালকাঁঠি</option><option value="Patuakhali">পটুয়াখালী</option><option value="Pirojpur">পীরগঞ্জ</option>';
    }
    // set Khulna division districts
    else if (diviList == 'Khulna') {
        var disctList = '<option disabled selected>জেলা নির্বাচন করুন</option><option value="Khulna">খুলনা</option><option value="Bagerhat">বাগের হাট</option><option value="Chuadanga">চুয়াডাঙ্গা</option><option value="Jashore">যশোর</option><option value="Jhenaidah">ঝিনাইদহ</option><option value="Kushtia">কুষ্টিয়া</option><option value="Magura">মাগুরা</option><option value="Meherpur">মেহেরপুর</option><option value="Narail">নড়াইল</option><option value="Satkhira">সাতক্ষীরা</option>';
    }
    // set Mymensingh division districts
    else if (diviList == 'Mymensingh') {
        var disctList = '<option disabled selected>জেলা নির্বাচন করুন</option><option value="Mymensingh">ময়নমসিংহ</option><option value="Netrokona">নেত্রকণা</option><option value="Jamalpur">জামালপুর</option><option value="Sherpur">শেড়পুর</option>';
    }
    // set Rajshahi division districts
    else if (diviList == 'Rajshahi') {
        var disctList = '<option disabled selected>জেলা নির্বাচন করুন</option><option value="Rajshahi">রাজশাহী</option><option value="Bogra">বগুড়া</option><option value="Joypurhat">জয়পুরহাট</option><option value="Naogaon">নঁওগা</option><option value="Natore">নাটর</option><option value="Chapai Nawabganj">চাঁপাইনবাবগঞ্জ</option><option value="Pabna">পাবনা</option><option value="Sirajganj">সিরাজগঞ্জ</option>';
    }

    // set Sylhet division districts
    else if (diviList == 'Sylhet') {
        var disctList = '<option disabled selected>জেলা নির্বাচন করুন</option><option value="Sylhet">সিলেট</option><option value="Habiganj">হবিগঞ্জ</option><option value="Moulvibazar">মৌলভীবাজার</option><option value="Sunamganj">সুনামগঞ্জ</option>';
    }
    //  set/send districts name to District lists from division
    document.getElementById("distr").innerHTML = disctList;
}
// Thana Section select
function thanaList() {
    var DisList = document.getElementById('distr').value;
    // Set Dhaka District Upazila
    if (DisList == 'Dhaka') {
        var thanaList = '<option disabled selected>/option>উপজেলা নির্বাচন করুন<option value="Dhamrai">ধামরাই</option><option value="Dohar">দোহার</option><option value="Keraniganj">কেরাণীগঞ্জ</option><option value="Nawabganj">নবাবগঞ্জ</option><option value="Savar">সাভার</option><option value="Tejgaon Circle">তেঁজগাও</option>';
    }
    // Set Faridpur District Upazila
    else if (DisList == 'Faridpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Alfadanga">আলফাডাঙ্গা</option><option value="Bhanga">ভাঙ্গা</option><option value="Boalmari">বোয়ালমারী</option><option value="Faridpur Sadar">ফরিদপুর সদর</option><option value="Madhukhali">মধুখালী</option><option value="Nagarkanda">নগরকান্দা</option><option value="Sadarpur">সদরপুর</option><option value="Saltha">সালথা</option>';
    }
    // Set Gazipur District Upazila
    else if (DisList == 'Gazipur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="গাজীপুর সদর">Gazipur Sadar</option><option value="Kaliakair">কালিয়াকৈর</option><option value="Kaliganj">কালীগঞ্জ</option><option value="Kapasia">কাপাসিয়া</option><option value="Sreepur">শ্রীপুর</option>';
    }
    // Set Gopalganj District Upazila
    else if (DisList == 'Gopalganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Gopalganj Sadar">গোপালগঞ্জ সদর</option><option value="Kashiani">কাশিয়ানী</option><option value="Kotalipara">কোটালীপাড়া</option><option value="Muksudpur">মুকসুদপুর</option><option value="Tungipara">টুঙ্গিপাড়া</option>';
    }
    // Set Kishoreganj District Upazila
    else if (DisList == 'Kishoreganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Austagram">Austagram</option><option value="Bajitpur">Bajitpur</option><option value="Bhairab">Bhairab</option><option value="Hossainpur">Hossainpur</option><option value="Itna">Itna</option><option value="Karimganj">Karimganj</option><option value="Katiadi">Katiadi</option><option value="Kishoreganj Sadar</option><option value="Kuliarchar">Kuliarchar</option><option value="Mithamoin">Mithamoin</option><option value="Nikli">Nikli</option><option value="Pakundia">Pakundia</option><option value="Tarail">Tarail</option>';
    }
    // Set Madaripur District Upazila
    else if (DisList == 'Madaripur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Madaripur Sadar">Madaripur Sadar</option><option value="Kalkini">Kalkini</option><option value="Rajoir">Rajoir</option><option value="Shibchar">Shibchar</option>';
    }
    // Set Manikganj District Upazila
    else if (DisList == 'Manikganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Manikganj Sadar">Manikganj Sadar</option><option value="Daulatpur">Daulatpur</option><option value="Ghior">Ghior</option><option value="Harirampur">Harirampur</option><option value="Saturia">Saturia</option><option value="Shivalaya">Shivalaya</option><option value="Singair">Singair</option>';
    }
    // Set Munshiganj District Upazila
    else if (DisList == 'Munshiganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Munshiganj Sadar">Munshiganj Sadar</option><option value="Gazaria">Gazaria</option><option value="Lauhajong">Lauhajong</option><option value="Harirampur">Harirampur</option><option value="Saturia">Saturia</option><option value="Sirajdikhan">Sirajdikhan</option><option value="Tongibari">Tongibari</option><option value="Sreenagar">Sreenagar</option>';
    }
    // Set Narayanganj District Upazila
    else if (DisList == 'Narayanganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Narayanganj Sadar">Narayanganj Sadar</option><option value="Araihazar">Araihazar</option><option value="Bandar">Bandar</option><option value="Rupganj">Rupganj</option><option value="Sonargaon">Sonargaon</option>';
    }
    // Set Narsingdi District Upazila
    else if (DisList == 'Narsingdi') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Narsingdi Sadar">Narsingdi Sadar</option><option value="Belabo">Belabo</option><option value="Monohardi">Monohardi</option><option value="Palash">Palash</option><option value="Raipura">Raipura</option><option value="Shibpur">Shibpur</option>';
    }
    // Set Rajbari District Upazila
    else if (DisList == 'Rajbari') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Rajbari Sadar">Rajbari Sadar</option><option value="Baliakandi">Baliakandi</option><option value="Goalanda">Goalanda</option><option value="Kalukhali">Kalukhali</option><option value="Pangsha">Pangsha</option>';
    }
    // Set Shariatpur District Upazila
    else if (DisList == 'Shariatpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Shariatpur Sadar">Shariatpur Sadar</option><option value="Bhedarganj">Bhedarganj</option><option value="Damuddya">Damuddya</option><option value="Goshairhat">Goshairhat</option><option value="Janjira">Janjira</option><option value="Naria">Naria</option>';
    }
    // Set Tangail District Upazila
    else if (DisList == 'Tangail') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Tangail Sadar">Tangail Sadar</option><option value="Basail">Basail</option><option value="Bhuapur">Bhuapur</option><option value="Delduar">Delduar</option><option value="Dhanbari">Dhanbari</option><option value="Ghatail">Ghatail</option><option value="Gopalpur">Gopalpur</option><option value="Kalihati">Kalihati</option><option value="Madhupur">Madhupur</option><option value="Mirzapur">Mirzapur</option><option value="Nagarpur">Nagarpur</option><option value="Shakhipur">Shakhipur</option>';
    }
    // Set Bandarban District Upazila
    else if (DisList == 'Bandarban') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Bandarban Sadar">Bandarban Sadar</option><option value="Alikadam">Alikadam</option><option value="Lama">Lama</option><option value="Naikhyongchari">Naikhyongchari</option><option value="Rowangchari">Rowangchari</option><option value="Ruma">Ruma</option><option value="Thanchi">Thanchi</option>';
    }
    // Set Chandpur District Upazila
    else if (DisList == 'Chandpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Chandpur Sadar">Chandpur Sadar</option><option value="Faridganj">Faridganj</option><option value="Haimchar">Haimchar</option><option value="Haziganj">Haziganj</option><option value="Kachua">Kachua</option><option value="Matlab Dakshin">Matlab Dakshin</option><option value="Matlab Uttar">Matlab Uttar</option>';
    }
    // Set Chattogram District Upazila
    else if (DisList == 'Chattogram') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Anwara">Anwara</option><option value="Banskhali">Banskhali</option><option value="Boalkhali">Boalkhali</option><option value="Chandanish">Chandanish</option><option value="Fatikchari">Fatikchari</option><option value="Hathazari">Hathazari</option><option value="Karnaphuli">Karnaphuli</option><option value="Lohagara">Lohagara</option><option value="Mirsharai">Mirsharai</option><option value="Patiya">Patiya</option><option value="Rangunia">Rangunia</option><option value="Raojan">Raojan</option><option value="Sandwip">Sandwip</option><option value="Satkania">Satkania</option><option value="Sitakunda">Sitakunda</option>';
    }
    // Set Cox\'s Bazar District Upazila
    else if (DisList == 'Cox\'s Bazar') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Cox\'s Bazar Sadar">Cox\'s Bazar Sadar</option><option value="Chakoria">Chakoria</option><option value="Kutubdia">Kutubdia</option><option value="Teknaf">Teknaf</option><option value="Ramu">Ramu</option><option value="Moheskhali">Moheskhali</option><option value="Ukhiya">Ukhiya</option><option value="Pekua">Pekua</option>';
    }
    // Set Cumilla District Upazila
    else if (DisList == 'Cumilla') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Cumilla Sadar">Cumilla Sadar</option><option value="Barura">Barura</option><option value="Brahmanpara">Brahmanpara</option><option value="Burichong">Burichong</option><option value="Chandina">Chandina</option><option value="Chouddagram">Chouddagram</option><option value="Cumilla-S Daksin">Cumilla-S Daksin</option><option value="Daudkandi">Daudkandi</option><option value="Debidwar">Debidwar</option><option value="Homna">Homna</option><option value="Laksham">Laksham</option><option value="Lalmai">Lalmai</option><option value="Meghna">Meghna</option><option value="Monohorganj">Monohorganj</option><option value="Muradnagar">Muradnagar</option><option value="Nangalkot">Nangalkot</option><option value="Titas">Titas</option>';
    }
    // Set Feni District Upazila
    else if (DisList == 'Feni') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Feni Sadar">Feni Sadar</option><option value="Chhagalniya">Chhagalniya</option><option value="Daganbhuiyan">Daganbhuiyan</option><option value="Fulgazi">Fulgazi</option><option value="Porshuram">Porshuram</option><option value="Sonagazi">Sonagazi</option>';
    }
    // Set Khagrachhari District Upazila
    else if (DisList == 'Khagrachhari') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Khagrachhari Sadar">Khagrachhari Sadar</option><option value="Dighinala">Dighinala</option><option value="Guimara">Guimara</option><option value="Laxmichari">Laxmichari</option><option value="Mahalchari">Mahalchari</option><option value="Manikchari">Manikchari</option><option value="Matiranga">Matiranga</option><option value="Panchari">Panchari</option><option value="Ramgarh">Ramgarh</option>';
    }
    // Set Noakhali District Upazila
    else if (DisList == 'Noakhali') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Noakhali Sadar">Noakhali Sadar</option><option value="Begumganj">Begumganj</option><option value="Chatkhil">Chatkhil</option><option value="Companiganj">Companiganj</option><option value="Hatiya">Hatiya</option><option value="Kabir Hat">Kabir Hat</option><option value="Senbag">Senbag</option><option value="Sonaimuri">Sonaimuri</option><option value="Subarna Char">Subarna Char</option>';
    }
    // Set Rangamati District Upazila
    else if (DisList == 'Rangamati') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Rangamati Sadar">Rangamati Sadar</option><option value="Baghaichari">Baghaichari</option><option value="Barkal">Barkal</option><option value="Belaichari">Belaichari</option><option value="Juraichari">Juraichari</option><option value="Kaptai">Kaptai</option><option value="Kaukhali">Kaukhali</option><option value="Langadu">Langadu</option><option value="Nanniarchar">Nanniarchar</option><option value="Rajosthali">Rajosthali</option>';
    }

    // Set Lakshmipur District Upazila
    else if (DisList == 'Lakshmipur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Lakshmipur Sadar">Lakshmipur Sadar</option><option value="Raipur">Raipur</option><option value="Ramganj">Ramganj</option><option value="Ramgati">Ramgati</option><option value="Kamalnagar">Kamalnagar</option>';
    }
    // Set Barguna District Upazila
    else if (DisList == 'Barguna') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Barguna Sadar">Barguna Sadar</option><option value="Amtali">Amtali</option><option value="Bamna">Bamna</option><option value="Betagi">Betagi</option><option value="Patharghata">Patharghata</option><option value="Taltali">Taltali</option>';
    }
    // Set Barishal District Upazila
    else if (DisList == 'Barishal') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Barishal Sadar">Barishal Sadar</option><option value="Agailjhara">Agailjhara</option><option value="Babuganj">Babuganj</option><option value="Bakerganj">Bakerganj</option><option value="Banaripara">Banaripara</option><option value="Gouranadi">Gouranadi</option><option value="Hizla">Hizla</option><option value="Mehendiganj">Mehendiganj</option><option value="Uzirpur">Uzirpur</option><option value="Gouranadi">Gouranadi</option>';
    }
    // Set Bhola District Upazila
    else if (DisList == 'Bhola') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Bhola Sadar">Bhola Sadar</option><option value="Borhanuddin">Borhanuddin</option><option value="Charfassion">Charfassion</option><option value="Daulatkhan">Daulatkhan</option><option value="Lalmohan">Lalmohan</option><option value="Monpura">Monpura</option><option value="Tazumuddin">Tazumuddin</option>';
    }
    // Set Jhalokati District Upazila
    else if (DisList == 'Jhalokati') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Jhalokati Sadar">Jhalokati Sadar</option><option value="Kathalia">Kathalia</option><option value="Nalchity">Nalchity</option><option value="Rajapur">Rajapur</option>';
    }
    // Set Patuakhali District Upazila
    else if (DisList == 'Patuakhali') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Patuakhali Sadar">Patuakhali Sadar</option><option value="Bauphal">Bauphal</option><option value="Dashmina">Dashmina</option><option value="Dumki">Dumki</option><option value="Galachipa">Galachipa</option><option value="Kalapara">Kalapara</option><option value="Mirjaganj">Mirjaganj</option><option value="Rangabali">Rangabali</option>';
    }
    // Set Pirojpur District Upazila
    else if (DisList == 'Pirojpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Pirojpur Sadar">Pirojpur Sadar</option><option value="Bhandaria">Bhandaria</option><option value="Kawkhali">Kawkhali</option><option value="Mothbaria">Mothbaria</option><option value="Nazirpur">Nazirpur</option><option value="Nesarabad">Nesarabad</option><option value="Zianagar">Zianagar</option>';
    }
    // Set Khulna District Upazila
    else if (DisList == 'Khulna') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Batiaghata">Batiaghata</option><option value="Dacope">Dacope</option><option value="Dighalia">Dighalia</option><option value="Dumuria">Dumuria</option><option value="Koira">Koira</option><option value="Paikgacha">Paikgacha</option><option value="Phultala">Phultala</option><option value="Rupsa">Rupsa</option><option value="Terokhada">Terokhada</option>';
    }
    // Set Bagerhat District Upazila
    else if (DisList == 'Bagerhat') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Bagerhat Sadar">Bagerhat Sadar</option><option value="Chitalmari">Chitalmari</option><option value="Fakirhat">Fakirhat</option><option value="Kachua">Kachua</option><option value="Mollahat">Mollahat</option><option value="Mongla">Mongla</option><option value="Morrelganj">Morrelganj</option><option value="Rampal">Rampal</option><option value="Sharankhola">Sharankhola</option>';
    }
    // Set Chuadanga District Upazila
    else if (DisList == 'Chuadanga') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Chuadanga Sadar">Chuadanga Sadar</option><option value="Alamdanga">Alamdanga</option><option value="Damurhuda">Damurhuda</option><option value="Jibannagar">Jibannagar</option>';
    }
    // Set Jashore District Upazila
    else if (DisList == 'Jashore') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Jashore Sadar">Jashore Sadar</option><option value="Abhoynagar">Abhoynagar</option><option value="Bagherpara">Bagherpara</option><option value="Chowgacha">Chowgacha</option><option value="Jhikargacha">Jhikargacha</option><option value="Keshabpur">Keshabpur</option><option value="Monirampur">Monirampur</option><option value="Sarsha">Sarsha</option>';
    }
    // Set Jhenaidah District Upazila
    else if (DisList == 'Jhenaidah') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Jhenaidah Sadar">Jhenaidah Sadar</option><option value="Harinakunda">Harinakunda</option><option value="Kaliganj">Kaliganj</option><option value="Kotchandpur">Kotchandpur</option><option value="Maheshpur">Maheshpur</option><option value="Shailkupa">Shailkupa</option>';
    }
    // Set Kushtia District Upazila
    else if (DisList == 'Kushtia') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Kushtia Sadar">Kushtia Sadar</option><option value="Bheramara">Bheramara</option><option value="Daulatpur">Daulatpur</option><option value="Khoksha">Khoksha</option><option value="Kumarkhali">Kumarkhali</option><option value="Mirpur">Mirpur</option>';
    }
    // Set Magura District Upazila
    else if (DisList == 'Magura') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Magura Sadar">Magura Sadar</option><option value="Mohammadpur">Mohammadpur</option><option value="Salikha">Salikha</option><option value="Sreepur">Sreepur</option>';
    }
    // Set Meherpur District Upazila
    else if (DisList == 'Meherpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Meherpur Sadar">Meherpur Sadar</option><option value="Gangni">Gangni</option><option value="Mujib Nagar">Mujib Nagar</option>';
    }
    // Set Narail District Upazila
    else if (DisList == 'Narail') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Narail Sadar">Narail Sadar</option><option value="Kalia">Kalia</option><option value="Lohagara">Lohagara</option>';
    }
    // Set Satkhira District Upazila
    else if (DisList == 'Satkhira') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Satkhira Sadar">Satkhira Sadar</option><option value="Assasuni">Assasuni</option><option value="Debhata">Debhata</option><option value="Kalaroa">Kalaroa</option><option value="Kaliganj">Kaliganj</option><option value="Shyamnagar">Shyamnagar</option><option value="Tala">Tala</option>';
    }
    // Set Mymensingh District Upazila
    else if (DisList == 'Mymensingh') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Mymensingh Sadar">Mymensingh Sadar</option><option value="Bhaluka">Bhaluka</option><option value="Dhobaura">Dhobaura</option><option value="Fulbaria">Fulbaria</option><option value="Gaffargaon">Gaffargaon</option><option value="Gouripur">Gouripur</option><option value="Haluaghat">Haluaghat</option><option value="Ishwarganj">Ishwarganj</option><option value="Muktagacha">Muktagacha</option><option value="Nandail">Nandail</option><option value="Phulpur">Phulpur</option><option value="Tarakanda">Tarakanda</option><option value="Trishal">Trishal</option>';
    }
    // Set Netrokona District Upazila
    else if (DisList == 'Netrokona') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Netrokona Sadar">Netrokona Sadar</option><option value="Atpara">Atpara</option><option value="Barhatta">Barhatta</option><option value="Durgapur">Durgapur</option><option value="Kalmakanda">Kalmakanda</option><option value="Kendua">Kendua</option><option value="Khaliajuri">Khaliajuri</option><option value="Madan">Madan</option><option value="Mohanganj">Mohanganj</option><option value="Purbadhala">Purbadhala</option>';
    }
    // Set Jamalpur District Upazila
    else if (DisList == 'Jamalpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Jamalpur Sadar">Jamalpur Sadar</option><option value="Bakshiganj">Bakshiganj</option><option value="Dewanganj">Dewanganj</option><option value="Islampur">Islampur</option><option value="Madarganj">Madarganj</option><option value="Melendah">Melendah</option><option value="Sarishabari">Sarishabari</option>';
    }
    // Set Sherpur District Upazila
    else if (DisList == 'Sherpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Sherpur Sadar">Sherpur Sadar</option><option value="Jhenaigati">Jhenaigati</option><option value="Nakla">Nakla</option><option value="Nalitabari">Nalitabari</option><option value="Sreebordi">Sreebordi</option>';
    }
    // Set Rajshahi District Upazila
    else if (DisList == 'Rajshahi') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Bagha">Bagha</option><option value="Bagmara">Bagmara</option><option value="Charghat">Charghat</option><option value="Durgapur">Durgapur</option><option value="Godagari">Godagari</option><option value="Mohanpur">Mohanpur</option><option value="Paba">Paba</option><option value="Puthia">Puthia</option><option value="Tanore">Tanore</option>';
    }
    // Set Bogra District Upazila
    else if (DisList == 'Bogra') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Bogra Sadar">Bogra Sadar</option><option value="Adamdighi">Adamdighi</option><option value="Dhunot">Dhunot</option><option value="Dhupchancia">Dhupchancia</option><option value="Gabtali">Gabtali</option><option value="Kahaloo">Kahaloo</option><option value="Nandigram">Nandigram</option><option value="Sariakandi">Sariakandi</option><option value="Shajahanpur">Shajahanpur</option><option value="Sherpur">Sherpur</option><option value="Shibganj">Shibganj</option><option value="Sonatala">Sonatala</option>';
    }
    // Set Joypurhat District Upazila
    else if (DisList == 'Joypurhat') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Joypurhat Sadar">Joypurhat Sadar</option><option value="Akkelpur">Akkelpur</option><option value="Kalai">Kalai</option><option value="Khetlal">Khetlal</option><option value="Panchbibi">Panchbibi</option>';
    }
    // Set Naogaon District Upazila
    else if (DisList == 'Naogaon') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Naogaon Sadar">Naogaon Sadar</option><option value="Atrai">Atrai</option><option value="Badalgachi">Badalgachi</option><option value="Dhamoirhat">Dhamoirhat</option><option value="Manda">Manda</option><option value="Mohadevpur">Mohadevpur</option><option value="Niamatpur">Niamatpur</option><option value="Raninagar">Raninagar</option><option value="Shapahar">Shapahar</option><option value="Porsha">Porsha</option>';
    }
    // Set Natore District Upazila
    else if (DisList == 'Natore') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Natore Sadar">Natore Sadar</option><option value="Bagatipara">Bagatipara</option><option value="Baraigram">Baraigram</option><option value="Gurudaspur">Gurudaspur</option><option value="Lalpur">Lalpur</option><option value="Naldanga">Naldanga</option><option value="Singra">Singra</option>';
    }
    // Set Chapai Nawabganj District Upazila
    else if (DisList == 'Chapai Nawabganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Chapai Nawabganj Sadar">Chapai Nawabganj Sadar</option><option value="Bholahat">Bholahat</option><option value="Gomostapur">Gomostapur</option><option value="Nachol">Nachol</option><option value="Shibganj">Shibganj</option>';
    }
    // Set Pabna District Upazila
    else if (DisList == 'Pabna') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Pabna Sadar">পাবনা সদর</option><option value="Atghoria">আটঘরিয়া</option><option value="Bera">বেড়া</option><option value="Bhangura">ভাঙ্গুড়া</option><option value="Chatmohar">চাটমোহর</option><option value="Faridpur">ফরিদপুর</option><option value="Ishwardi">ঈশ্বরদী</option><option value="Santhia">সাঁথিয়া</option><option value="Sujanagar">সুজানগর</option>';
    }
    // Set Sirajganj District Upazila
    else if (DisList == 'Sirajganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Sirajganj Sadar">সিরাজগঞ্জ সদর</option><option value="Belkuchi">বেলকুচি</option><option value="Chowhali">চৌহালি</option><option value="Kamarkhand">কামারখন্দ</option><option value="Kazipur">কাজীপুর</option><option value="Raiganj">রায়গঞ্জ</option><option value="Shahzadpur">শাহজাদপুর</option><option value="Tarash">তাড়াশ</option><option value="Ullapara">উল্লাপাড়া</option>';
    }
    // Set Rangpur District Upazila
    else if (DisList == 'Rangpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Rangpur Sadar">রংপুর সদর</option><option value="Badarganj">বদরগঞ্জ</option><option value="Gangachara">গংগাচড়া</option><option value="Kaunia">কাউনিয়া</option><option value="Mithapukur">মিঠাপুকুর</option><option value="Pirgacha">পীরগাছা</option><option value="Pirganj">পীরগঞ্জ</option><option value="Taraganj">তারাগঞ্জ</option>';
    }
    // Set Dinajpur District Upazila
    else if (DisList == 'Dinajpur') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Dinajpur Sadar">দিনাজপুর সদর</option><option value="Birampur">বিরামপুর</option><option value="Birganj">বীরগঞ্জ </option><option value="Birol">বিরল</option><option value="Bochaganj">বোচাগঞ্জ</option><option value="Chirirbandar">চিরিরবন্দর</option><option value="Fulbari">ফুলবাড়ী</option><option value="Ghoraghat">Ghoraghat</option><option value="Hakimpur">হামিকপুর</option><option value="Kaharol">কাহারোল</option><option value="Khanshama">খানসামা</option><option value="Nawabganj">নবাবগঞ্জ</option><option value="Parbatipur">পার্বতীপুর</option>';
    }
    // Set Gaibandha District Upazila
    else if (DisList == 'Gaibandha') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Gaibandha Sadar">গাইবান্ধা সদর</option><option value="Fulchari">ফুলছড়ি</option><option value="Gobindaganj">গোবিন্দগঞ্জ</option><option value="Palashbari">পলাশবাড়ী</option><option value="Sadullapur">সাদুল্লাপুর</option><option value="Saghata">সাঘাটা</option><option value="Sundarganj">সুন্দরগঞ্জ</option>';
    }
    // Set Kurigram District Upazila
    else if (DisList == 'Kurigram') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Kurigram Sadar">কুড়িগ্রাম সদর</option><option value="Bhurungamari">ভূরুঙ্গামারী</option><option value="Chilmari">চিলমারী</option><option value="Pulbari">ফুলবাড়ী</option><option value="Nageswari">নাগেশ্বরী</option><option value="Rajarhat">রাজারহাট</option><option value="Rajibpur">রাজিবপুর</option><option value="Rowmari">রৌমারী</option><option value="Ulipur">উলিপুর</option>';
    }
    // Set Lalmonirhat District Upazila
    else if (DisList == 'Lalmonirhat') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Lalmonirhat Sadar">লালমনিরহাট সদর</option><option value="Aditmari">আদিতমারী</option><option value="Hatibandha">হাতিবান্ধা</option><option value="Kaliganj">কালীগঞ্জ</option><option value="Patgram">পাটগ্রাম</option>';
    }
    // Set Nilphamari District Upazila
    else if (DisList == 'Nilphamari') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Saidpur">সৈয়দপুর</option><option value="Nilphamari Sadar">নীলফামারী সদর</option><option value="Dimla">ডিমলা</option><option value="Domar">ডোমার</option><option value="Jaldhaka">জলঢাকা</option><option value="Kishoreganj">কিশোরগঞ্জ</option>';
    }
    // Set Panchagarh District Upazila
    else if (DisList == 'Panchagarh') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Panchagarh Sadar">পঞ্চগড় সদর</option><option value="Atwari">আটোয়ারী</option><option value="Boda">বোদা</option><option value="Debiganj">দেবীগঞ্জ</option><option value="Tetulia">তেতুলিয়া</option>';
    }
    // Set Thakurgaon District Upazila
    else if (DisList == 'Thakurgaon') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Thakurgaon Sadar">ঠাকুরগাঁও সদর</option><option value="Baliadangi">বালিয়াডাঙ্গী</option><option value="Haripur">হরিপুর</option><option value="Pirganj">Pirganj</option><option value="Ranisankail">রাণীশংকৈল</option>';
    }
    // Set Sylhet District Upazila
    else if (DisList == 'Sylhet') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="সিলেট সদর">সিলেট সদর</option><option value="Balaganj">বালাগঞ্জ</option><option value="Beanibazar">বিয়ানীবাজার</option><option value="Biswanath">বিশ্বনাথ</option><option value="Companiganj">কোম্পানীগঞ্জ</option><option value="Dakshin Surma">দক্ষিণ সুরমা</option><option value="Fenchuganj">ফেঞ্চুগঞ্জ</option><option value="Golapganj">গোলাপগঞ্জ</option><option value="Gowainghat">গোয়াইনঘাট</option><option value="Jointiapur">জৈন্তাপুর</option><option value="Kanaighat">কানাইঘাট</option><option value="Osmaninagar">ওসমানী নগর</option><option value="Zakiganj">জকিগঞ্জ</option>';
    }
    // Set Habiganj District Upazila
    else if (DisList == 'Habiganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Habiganj Sadar">হবিগঞ্জ সদর</option><option value="Azmiriganjআজিমগঞ্জ</option><option value="Bahubal">বাহুবল</option><option value="Baniachong">বানিয়াচং</option><option value="Chunarughat">চুনারুঘাট</option><option value="Lakhai">লাখাই</option><option value="Madhabpur">মাধবপুর</option><option value="Nabiganj">নবীগঞ্জ</option><option value="Sayestaganj">শায়েস্তাগঞ্জ</option>';
    }
    // Set Moulvibazar District Upazila
    else if (DisList == 'Moulvibazar') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Moulvibazar Sadar">মৌলভীবাজার সদর</option><option value="Barlekha">বড়লেখা</option><option value="Juri">জুড়ী</option><option value="Kamalganj">কমলগঞ্জ</option><option value="Kulaura">কুলাউড়া</option><option value="Rajnagar">রাজানগর</option><option value="Sreemangal">শ্রীমঙ্গল</option>';
    }
    // Set Sunamganj District Upazila
    else if (DisList == 'Sunamganj') {
        var thanaList = '<option disabled selected>উপজেলা নির্বাচন করুন</option><option value="Sunamganj Sadar">সুনামগঞ্জ</option><option value="Biswamvarpur">বিশ্বম্ভপুর</option><option value="Chatak">চাতেক</option><option value="Dakhin Sunamganj">দক্ষিণ সুনামগঞ্জ</option><option value="Derai">দিরাই</option><option value="Dharmapasha">ধর্মপাশা </option><option value="Doarabazar">দোয়ারাবাজার</option><option value="Jagannathpur">জগন্নাথপুর</option><option value="Jamalganj">জামালগঞ্জ</option><option value="Sulla">শাল্লা</option><option value="Tahirpur">তাহিরপুর</option>';
    }
    document.getElementById("upazila").innerHTML = thanaList;
}
