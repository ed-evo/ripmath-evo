# [Dal discreto al continuo]{.text-red}

Esistono vari tipi di problemi in cui l'insieme dei valori possibili è continuo, cioè abbiamo un numero infinito di probabilità per tutti i valori compresi in un intervallo in corrispondenza biunivoca con un intervallo della Retta Reale.

Esempi:
- **la probabilità di caduta di un satellite su una zona dell'Europa**
  So solamente che cadrà in una certa zona con probabilità $p$, ma non posso indicare un punto o un numero finito di punti in cui può cadere.
- **l'usura di un cilindro ruotante in un meccanismo**
  Posso indicare il raggio massimo ed il raggio minimo che mi permette di usarlo, ma non posso suddividere la differenza dei raggi in un numero finito di punti.
- **La probabilità di morire di una persona di sesso maschile di $50$ anni da oggi al $2070$**
  Serve per calcolare le tabelle assicurative, ma non posso indicare il valore preciso della probabilità di morte istante per istante.

Quelli sopra sono tutti esempi di probabilità continua; in alcuni casi si può ovviare, come nel caso delle assicurazioni, dividendo l'intervallo in anni, però è un'approssimazione: la probabilità di morte di una persona a gennaio sarà diversa dalla probabilità per la stessa persona a dicembre dello stesso anno.

Consideriamo ancora la caduta di un oggetto su un piano determinato: come posso esprimere la probabilità di impatto in un punto se un punto non ha dimensione?
Allora dovrò sostituire al concetto di punto il solito concetto di intervallo per poter trovare una probabilità effettiva: è lo stesso ragionamento che ci ha portato a costruire l'analisi matematica basandola sul concetto di intervallo;
Se considero un intervallo, anche se infinitesimo, allora per esso potrò parlare della probabilità di impatto con l'oggetto che cade.

Per sapere come comportarci intuitivamente riferiamoci ad un esempio classico:
**lanciando una moneta ho due possibilità: o testa o croce entrambe con probabilità $p = \frac{1}{2}$**
Abbiamo già studiato questo caso e visto la distribuzione di questo fenomeno (vedi l'esempio).
Se aumentiamo il numero delle prove avremo che al posto dei rettangoli avremo dei rettangoli sempre più snelli sino ad arrivare a basi infinitesime e quindi ad avere, per i valori delle probabilità, una curva indistinguibile da una curva continua.

Dovremo quindi di utilizzare l'analisi matematica e lo studio di funzioni, inoltre, siccome le probabilità saranno legate alle aree di parti delle curve, dovremo conoscere bene soprattutto il calcolo degli integrali definiti.