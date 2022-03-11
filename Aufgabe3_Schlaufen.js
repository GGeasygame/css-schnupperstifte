/*
Weiter wollen wir uns mit den Schlaufen auseinandersetzen. Es gibt mehrere Schlaufentypen,
allerdings fokussieren wir uns auf eine.

Grundlagen:
Schlaufen werden dazu verwendet um gewisse Abläufe in einem Programm mehrmals auszuführen.

Beispiel einer For-Schlaufe:

for(let variabelName = 0; variabelName < 20; variabelName++) {
    console.log(variabelName);
}

for() -> for ist ein von JavaScript definiertes Schlüsselwort und kennzeichnet eine For-Schlaufe

In der For-Schlaufe hat es drei Segmente:

let variabelName = 0; -> Erstes Segment, hier kannst du eine Variabel erstellen.
variabelName < 20; -> Zweites Segment, hier definierst du eine Bedingung. Die Schlaufe wird so lange ausgeführt, wie die Bedingung wahr ist.
variabelName++; -> Im dritten Segment, damit die Schlaufe nicht unendlich ausgeführt wird, muss die Variabel verändert werden. 
(Mit dem ++ Operator wird die Variabel um 1 erhöht.)

In den geschweiften Klammern ist Code welcher bei jedem Durchgang der Schlaufe ausgeführt wird.

{
    console.log(variabelName);  -> Codeblock welcher jedesmal ausgeführt wird.
}


Aufgabe:
Erstelle nun deine eigene For-Schlaufe, welche in der Konsole die Zahlen von 1 bis 1000 ausgibt.
*/
