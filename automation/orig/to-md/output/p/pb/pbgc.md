# [Codice ASCII esteso]{.text-red}
### brevi cenni

Attorno agli anni $70$ i vari costruttori di computer inventarono dei codici per poter avere i caratteri dell'alfabeto sul computer, ad esempio IBM utilizzò il codice (EBCDIC Extended Binary-Codec Decimal Interchanged Code), che essendo utilizzato solamente su macchine IBM non ebbe una diffusione universale.

Invece il codice che ebbe maggior fortuna fu il codice ASCII (American Standard Code for Information Interchange).

Dapprima si ebbe il codice ASCII ($7$ bit per $128$ possibilità) poi il codice ASCII esteso, quello universalmente utilizzato di $8$ bit ed $8$ bit = $1$ Byte divenne l'unità di misura dell'informazione.

> **Cosa c'è nel codice ASCII esteso:**
> (scrivo in numeri decimali)
> - Le codifiche da $0$ a $32$ sono "caratteri di controllo" e servono a vari usi, come l'emissione di un suono ($7$), oppure il ritorno a capo nella macchina da scrivere ($13$) collegata al computer (ti ricordo che lo schermo è un'invenzione degli anni $80$).
> - Da $33$ a $64$ vari simboli, quali parentesi tonda aperta ($41$) e chiusa ($42$), i numeri decimali da $0$ a $9$ (da $48$ a $57$), altri simboli da $58$ a $64$ tipo = ($61$), ? ($63$).
> - Da $65$ a $90$ le lettere maiuscole e da $91$ a $122$ le lettere minuscole.
>
> La scelta di questi numeri per le lettere è dovuta al fatto che è possibile passare dalle lettere maiuscole alle lettere minuscole semplicemente cambiando da $0$ a $1$ il terzo bit partendo da sinistra: ad esempio:
>
> $$
> A = 65_{10} = 01\textcolor{red}{0}00001_2 \quad a = 97_{10} = 01\textcolor{red}{1}00001_2
> $$
>
> $$
> M = 77_{10} = 01\textcolor{red}{0}01101_2 \quad m = 109_{10} = 01\textcolor{red}{1}01101_2
> $$
>
> - Da $123$ a $127$ altri simboli matematici tipo le parentesi graffe ($123$ e $125$).
> Qui terminavano i caratteri del codice ASCII a $7$ bit, poi nel codice esteso vennero aggiunti:
> - Da $128$ a $154$ caratteri tipografici speciali tipo il dittongo æ ($146$), È ($130$), É ($138$).
> - Da $155$ a $175$ un misto di simboli matematici e alfabetici.
> - Da $176$ a $254$ ancora simboli grafici e simboli alfabetici speciali.
> - Infine c'è $255$ che è lo spazio vuoto (quello che lasci scrivendo fra una parola e l'altra).
>
> Mentre i simboli matematici ed i caratteri tipografici sono universali, i simboli grafici che rappresentano i comandi e gli altri simboli grafici possono essere visualizzati diversamente a seconda del software utilizzato per la loro visione.
>
> Per una tabella completa dei caratteri ASCII vi consiglio di consultare Wikipedia: https://it.wikipedia.org/wiki/ASCII
> (ricordarsi di costruire una tabella ASCII e metterla qua)

Nei vecchi computer era possibile visualizzare i vari simboli corrispondenti ai Byte tenendo premuto il tasto Alt e componendo il numero decimale sul tastierino numerico (non sulla tastiera), essendo il tasto BlocNum attivo; al rilascio dei tasti compariva sullo schermo il simbolo relativo.

Ricordo ancora che, se qualcuno voleva smanettare un po' sul computer a livello abbastanza elevato, doveva conoscere il codice a memoria per poter dare le giuste istruzioni alla macchina.

> Questo era il problema con i primi computer: senza avere un "traduttore" che trasferisse le istruzioni da linguaggio umano a linguaggio macchina era necessario scrivere tutte le istruzioni in bit e, più tardi, in linguaggio macchina: ad esempio il comando ritorno carrello (carattere $13$ in ASCII $00001101_2$ oppure $0D_{16}$ in esadecimale) in linguaggio macchina diventa CR (Carriage Return).
>
> I primi programmatori di solito non resistevano più di $6$ mesi a scrivere direttamente in Byte, poi fu inventato il linguaggio macchina, più vicino al linguaggio umano.

Con i nuovi computer e programmi di scrittura è tutto più semplice ed il codice è piuttosto inutilizzato se non da qualche hacker irriducibile.

## Unicode

Il codice Unicode è un sistema di codifica dei caratteri a $16$ bit elaborato nel $1991$. Il sistema Unicode permette di rappresentare tutti i caratteri attraverso un codice a $16$ bit, indipendentemente da qualsiasi sistema operativo o linguaggio di programmazione.

Esso raggruppa infatti la quasi totalità degli alfabeti esistenti (arabo, armeno, cirillico, greco...).