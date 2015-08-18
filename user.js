
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
  * [Robotics and Vision: Tracking with Deep Networks]({{=$DOC.root}}html/research-tracking-with-deep-networks.html)
  * [Robotics and Vision: Bio-inspired Image Sensors]({{=$DOC.root}}html/research-bio-inspired-image-sensors.html)
  * [Demo](https://engineering.purdue.edu/elab/demo/demo.html)
* [Publications]()
  * [Publications]({{=$DOC.root}}html/publications.html)
  * [Open-Source Circuits and Systems]({{=$DOC.root}}html/publications-open-source-circuits-and-systems.html)
* [Teaching]()
  * [Teaching]({{=$DOC.root}}html/teaching.html)
  * [BME495A Computational Neuroscience]({{=$DOC.root}}html/teaching-bme495a-computational-neuroscience.html)
* [Outreach]({{=$DOC.root}}html/outreach.html)
* [Wiki]()
  * [Git and Github]({{=$DOC.root}}html/wiki-git-and-github.html)
  * [Torch7 Installation]({{=$DOC.root}}html/wiki-torch7-installation.html)
  * [Xilinx Tools on Ubuntu]({{=$DOC.root}}html/wiki-xilinx-tools-on-ubuntu.html)
  * [Icarus Verilong Installation on Mac]({{=$DOC.root}}html/wiki-icarus-verilog-installation-on-mac.html)
  * [Connecting to the e-lab Server]({{=$DOC.root}}html/wiki-connect-to-elab-server.html)
  * [Program ML605 PowerOn Flash]({{=$DOC.root}}html/wiki-program-ml605-poweron-flash.html)
  * [Opalkelly Board Setup]({{=$DOC.root}}html/wiki-opalkelly-board-setup.html)
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
* © 2015 [e-Lab](https://engineering.purdue.edu/elab)\n\***\n\
* [Purdue University](http://purdue.edu)\
[/footer-layout]';
