function generate(){
    var quotes = {
        "- George Washington" : '"Liberty, when it begins to take root, is a plant of rapid growth."',
        "- Kahlil Gibran" : '"Life without liberty is like a body without spirit."',
        "- Herbert Hoover" : '"Freedom is the open window through which pours the sunlight of the human spirit and human dignity."',
        "- Albert Einstein" : '"For everything that is really great and inspiring is created by the individual who can labour in freedom."',
        "- Nelson Mandela" : '"For to be free is not merely to cast off ones chains, but to live in a way that respects and enhances the freedom of others."',
        "- Epictetus" : '"Is freedom anything else than the right to live as we wish? Nothing else"',
        "- Robert Frost" : '"Freedom lies in being bold."',
        "Maya Angelou" : '"Independence is a heady draft, and if you drink it in your youth, it can have the same effect on the brain as young wine does. It does not matter that its taste is not always appealing. It is addictive and with each drink you want more."',
        "- Charlotte Brontë, Jane Eyre" : '"I am no bird; and no net ensnares me; I am a free human being with an independent will."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}