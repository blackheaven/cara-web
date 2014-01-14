function setCity(selector, url, title)
{
  $(selector)[0].href=url;
  $(selector)[0].setAttribute("onfocus","blur();");
  $(selector).mouseenter(function()
    {
      $('#cityname').html('<h2>' + title + '</h2>');
    }).mouseleave(function()
    {
      $('#cityname').html('<h2>&nbsp;</h2>');
    });
}

$(document).ready(function()
{
    setCity('#lyon', 'http://lyon.clubagilerhonealpes.org/', 'Lyon');
    setCity('#grenoble', 'http://clubagilerhonealpes.org/', 'Grenoble');
    setCity('#annecy', 'http://www.cara74.org/', 'Annecy');
    setCity('#valence', 'http://groupspaces.com/CARAValence/', 'Valence');
});
