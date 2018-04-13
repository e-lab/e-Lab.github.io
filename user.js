
//$DOC.mod('theme-switcher');

// example of using $DOC.parseContent function to create sections
$DOC.parseContent(function(){/*

<!--header-panel
<div style="min-height:215px; background-color:white;
   background-image:url({{=$DOC.root}}data/img/elab_banner.jpg); background-repeat:no-repeat;"></div>
-->

<!--fixed-top-bar->header-bar-->

<!--header-bar
[navbar]
* [eLab home]({{=$DOC.root}}index.html)
* [Research]()
  * [Research]({{=$DOC.root}}html/research.html)
  * [Intelligent Vision Systems]({{=$DOC.root}}html/research-intelligent-vision-systems.html)
  * [Robotics and Vision: Bio-inspired Image Sensors]({{=$DOC.root}}html/research-bio-inspired-image-sensors.html)
* [Publications]()
  * [Publications]({{=$DOC.root}}html/publications.html)
  * [Open-Source Circuits and Systems]({{=$DOC.root}}html/publications-open-source-circuits-and-systems.html)
* [Teaching]()
  * [Teaching]({{=$DOC.root}}html/teaching.html)
* [Outreach]({{=$DOC.root}}html/outreach.html)
* [Jobs]({{=$DOC.root}}html/jobs.html)
* [Contact]()
  * [Contact]({{=$DOC.root}}html/contact.html)
  * [Eugenio Culurciello]({{=$DOC.root}}html/contact-eugenio-culurciello.html)
  * [Seminar]({{=$DOC.root}}html/contact-seminar.html)
[/navbar]
-->


*/});

// another example of creating a named section
$DOC.sections['footer-panel'] =
'[footer-layout scheme=line]\
* © 2018 [e-Lab](https://engineering.purdue.edu/elab)\n\***\n\
* [Purdue University](http://purdue.edu)\
[/footer-layout]';
