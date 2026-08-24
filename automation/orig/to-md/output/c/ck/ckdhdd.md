# [Quarto tipo]{.text-red-darken-1}

Studiare questo è da paranoici: non ho mai visto farlo in nessun ordine di scuola, anche perché poi, se si dà come esercizio, bisogna correggerlo; comunque se pensi che il tuo Prof. sia abbastanza matto da darti un esercizio del genere qui di seguito metto la dimostrazione, ed in fondo alla dimostrazione metto la [formula risolutiva](#formula).

Devo risolvere

$$
\int \frac{\textcolor{blue}{Ax + B}}{\textcolor{blue}{(x^2 + px + q)^n}} \, dx =
$$

> **Nota:** Procediamo esattamente come nell'integrale del terzo tipo (se questa parte l'hai già fatta e capita saltala pure) però ripassarla non fa mai male.

Voglio che al denominatore, dentro parentesi, vi sia un termine al quadrato, perché con i termini al quadrato ho alcuni integrali che so risolvere: $x^2$ è il quadrato del primo termine, $px$ sarà il doppio prodotto quindi devo aggiungere [e togliere] $\left(\frac{p^2}{4}\right)$.

$$
\textcolor{blue}{x^2 + px + q = x^2 + px + \frac{p^2}{4} - \frac{p^2}{4} + q =}
$$

quindi ottengo

$$
\textcolor{blue}{= \left(x + \frac{p}{2}\right)^2 + q - \frac{p^2}{4} =}
$$

$\left[q - \left(\frac{p^2}{4}\right)\right]$ è una costante [positiva]{.text-blue} quindi possiamo chiamarla $k^2$

ed ottengo:

$$
\textcolor{blue}{x^2 + px + q = \left(x + \frac{p}{2}\right)^2 + k^2}
$$

Ora cerco di trasformare il numeratore in modo che vi compaia la derivata del denominatore iniziale $[2x + p]$ (in questo modo potrò poi dividere l'integrale in due integrali più semplici).

Al numeratore pongo:
$\textcolor{blue}{Ax + B =}$

$$
\textcolor{blue}{= \frac{A}{2}(2x) + B =}
$$

per avere la derivata (a meno del fattore $\frac{A}{2}$) devo aggiungere e togliere $\frac{Ap}{2}$

$$
\textcolor{blue}{= \frac{A}{2}(2x) + B + \frac{A}{2}p - \frac{A}{2}p =}
$$

$$
\textcolor{blue}{= \frac{A}{2}(2x + p) + B - \frac{A}{2}p}
$$

Quindi posso scrivere

$$
= \int \frac{\textcolor{blue}{\frac{A}{2}(2x + p) + B - \frac{A}{2}p}}{\textcolor{blue}{(x^2 + px + q)^n}} \, dx =
$$

spezzo l'integrale

$$
= \int \frac{\textcolor{blue}{\frac{A}{2}(2x + p)}}{\textcolor{blue}{(x^2 + px + q)^n}} \, dx + \int \frac{\textcolor{blue}{B - \frac{A}{2}p}}{\textcolor{blue}{(x^2 + px + q)^n}} \, dx =
$$

Estraggo le costanti e nel secondo integrale sostituisco il denominatore con l'espressione trovata prima

$$
= \textcolor{blue}{\frac{A}{2}} \int \frac{\textcolor{blue}{2x + p}}{\textcolor{blue}{(x^2 + px + q)^n}} \, dx + \textcolor{blue}{\left(B - \frac{A}{2}p\right)} \int \frac{\textcolor{blue}{1}}{\textcolor{blue}{\left[\left(x + \frac{p}{2}\right)^2 + k^2\right]^n}} \, dx =
$$

Devo risolvere questi due integrali:

- Il primo è un integrale che posso fare per sostituzione:

$$
\textcolor{blue}{\frac{A}{2}} \int \frac{\textcolor{blue}{2x + p}}{\textcolor{blue}{(x^2 + px + q)^n}} \, dx =
$$

Pongo $\textcolor{blue}{x^2 + px + q} = \textcolor{red}{t}$

faccio il differenziale da una parte e dall'altra dell'uguale

$\textcolor{blue}{(2x + p) \, dx} = \textcolor{red}{dt}$

ricavo $dx$

$$
\textcolor{blue}{dx} = \frac{\textcolor{red}{dt}}{\textcolor{blue}{2x + p}}
$$

Sostituisco quello che posso nell'integrale di partenza

$$
\textcolor{blue}{\frac{A}{2}} \int \frac{\textcolor{blue}{2x + p}}{\textcolor{red}{t^n}} \frac{\textcolor{red}{dt}}{\textcolor{blue}{2x + p}} =
$$

Semplifico $2x + p$ ed ottengo

$$
= \textcolor{blue}{\frac{A}{2}} \int \frac{\textcolor{red}{1}}{\textcolor{red}{t^n}} \, \textcolor{red}{dt} =
$$

Porto la variabile $t$ al numeratore cambiando di segno l'esponente

$$
\textcolor{blue}{\frac{A}{2}} \int \textcolor{red}{t^{-n}} \, \textcolor{red}{dt} = \textcolor{blue}{\frac{A}{2}} \frac{\textcolor{red}{t^{-n+1}}}{\textcolor{red}{-n + 1}}
$$

Ora sostituisco a $t$ il suo valore ed ottengo il risultato

$$
= \textcolor{blue}{\frac{A}{2}} \frac{\textcolor{blue}{(x^2 + px + q)^{-n+1}}}{\textcolor{blue}{1 - n}} =
$$

o meglio, cambiando di segno l'esponente per riportare al denominatore

$$
= \frac{\textcolor{blue}{A}}{\textcolor{blue}{2(1 - n)(x^2 + px + q)^{n-1}}}
$$

- Considero il secondo:

$$
= \textcolor{blue}{\left(B - \frac{A}{2}p\right)} \int \frac{\textcolor{blue}{1}}{\textcolor{blue}{\left[\left(x + \frac{p}{2}\right)^2 + k^2\right]^n}} \, dx =
$$

Facciamo anche questo per sostituzione:
Pongo $\textcolor{blue}{x + \frac{p}{2}} = \textcolor{red}{kt}$ (in questo modo $k$ potrà essere raccolta con quella vicina ed estratta dalla potenza e dall'integrale)

faccio il differenziale da una parte e dall'altra dell'uguale

$\textcolor{blue}{dx} = \textcolor{red}{k \, dt}$

Sostituisco quello che posso nell'integrale di partenza

$$
= \textcolor{blue}{\left(B - \frac{A}{2}p\right)} \int \frac{\textcolor{red}{1}}{\textcolor{red}{(k^2t^2 + k^2)^n}} \, \textcolor{red}{k \, dt} =
$$

estraggo la costante $k$ dalla potenza

$$
= \textcolor{blue}{\left(B - \frac{A}{2}p\right)} \int \frac{\textcolor{red}{1}}{\textcolor{red}{k^{2n}(t^2 + 1)^n}} \, \textcolor{red}{k \, dt} =
$$

Estraggo le costanti dall'integrale

$$
= \textcolor{blue}{\left(B - \frac{A}{2}p\right) \frac{k}{k^{2n}}} \int \frac{\textcolor{red}{1}}{\textcolor{red}{(t^2 + 1)^n}} \, \textcolor{red}{dt} =
$$

semplifico

$$
= \textcolor{blue}{\left(B - \frac{A}{2}p\right) \frac{1}{k^{2n-1}}} \int \frac{\textcolor{red}{1}}{\textcolor{red}{(t^2 + 1)^n}} \, \textcolor{red}{dt} =
$$

metto la costante iniziale in modo più compatto, semplifico:

$$
= \frac{\textcolor{blue}{(2B - Ap)k}}{\textcolor{blue}{2k^{2n}}} \int \frac{\textcolor{red}{1}}{\textcolor{red}{(t^2 + 1)^n}} \, \textcolor{red}{dt} =
$$

Per semplicità continuo l'integrale senza considerare le costanti

$$
\int \frac{\textcolor{red}{1}}{\textcolor{red}{(t^2 + 1)^n}} \, \textcolor{red}{dt} =
$$

Provo l'integrazione per parti per vedere se riesco ad abbassare di grado l'espressione: dalla formula

$$
\textcolor{blue}{\int f \cdot g = f \cdot \int g - \int \left(f' \cdot \int g\right)}
$$

Ricordando che

$$
\textcolor{red}{\frac{1}{(t^2 + 1)^n} = (t^2 + 1)^{-n}}
$$

pongo
$\textcolor{blue}{f = \textcolor{red}{(t^2 + 1)^{-n}}}$
$\textcolor{blue}{g = \textcolor{red}{1}}$

quindi ottengo

$$
\textcolor{red}{= (t^2 + 1)^{-n} \int 1 \, dt - \int \left[-n(t^2 + 1)^{-n-1} \cdot 2t \int 1 \, dt\right] dt =}
$$

> **Nota:** Il $2t$ prima dell'ultimo integrale deriva dal fatto che ho derivato una funzione di funzione:
> derivata di $(t^2 + 1)^{-n} = -n(t^2 + 1)^{-n-1} \cdot 2t$

Porto il meno fuori dall'integrale ed integro i $dt$

$$
\textcolor{red}{= (t^2 + 1)^{-n} \cdot t + \int n(t^2 + 1)^{-n-1} \cdot 2t \cdot t \, dt =}
$$

$$
\textcolor{red}{= t(t^2 + 1)^{-n} + 2n \int t^2 (t^2 + 1)^{-n-1} \, dt =}
$$

Se ora lo riporto a forma frazionaria

$$
\textcolor{red}{= \frac{t}{(t^2 + 1)^n} + 2n \int \frac{t^2}{(t^2 + 1)^{n+1}} \, dt =}
$$

Nell'integrale applico il metodo di aggiungere e togliere per semplificare con il denominatore (questo metodo lo abbiamo visto applicare negli integrali per scomposizione)

$$
\textcolor{red}{= \frac{t}{(t^2 + 1)^n} + 2n \int \frac{t^2 + 1 - 1}{(t^2 + 1)^{n+1}} \, dt =}
$$

Spezzo l'integrale in due parti

$$
\textcolor{red}{= \frac{t}{(t^2 + 1)^n} + 2n \int \frac{t^2 + 1}{(t^2 + 1)^{n+1}} \, dt + 2n \int \frac{-1}{(t^2 + 1)^{n+1}} \, dt =}
$$

Nel primo integrale posso semplificare numeratore e denominatore

$$
\textcolor{red}{= \frac{t}{(t^2 + 1)^n} + 2n \int \frac{1}{(t^2 + 1)^n} \, dt - 2n \int \frac{1}{(t^2 + 1)^{n+1}} \, dt =}
$$

Ho ottenuto un integrale che a meno della costante è uguale a quello di partenza: questo mi serve per trovare la formula (qualcosa di simile avevamo visto nell'integrazione per ricorrenza)

$$
\textcolor{blue}{\int \frac{1}{(t^2 + 1)^n} \, dt} = \textcolor{red}{\frac{t}{(t^2 + 1)^n}} + \textcolor{blue}{2n \int \frac{1}{(t^2 + 1)^n} \, dt} \textcolor{red}{- 2n \int \frac{1}{(t^2 + 1)^{n+1}} \, dt}
$$

Porto l'ultimo integrale prima dell'uguale e sommo i due integrali in blu (basta sommare le costanti)

$$
\textcolor{red}{2n \int \frac{1}{(t^2 + 1)^{n+1}} \, dt} = \textcolor{red}{\frac{t}{(t^2 + 1)^n}} + \textcolor{blue}{(2n - 1) \int \frac{1}{(t^2 + 1)^n} \, dt}
$$

Ricavo il primo integrale dividendo tutto per $2n$

$$
\textcolor{red}{\int \frac{1}{(t^2 + 1)^{n+1}} \, dt = \frac{t}{2n(t^2 + 1)^n} + \frac{2n - 1}{2n} \int \frac{1}{(t^2 + 1)^n} \, dt}
$$

Questa è una forma per ricorrenza: mi permette di conoscere l'integrale conoscendo un integrale di grado inferiore nelle variabili: riferendolo a quello che vogliamo trovare cioè sostituendo a $n+1$ la $n$ ed alla $n$ sostituendo $n-1$ otteniamo quello che cercavamo:

$$
\textcolor{red}{\int \frac{1}{(t^2 + 1)^n} \, dt = \frac{t}{2(n-1)(t^2 + 1)^{n-1}} + \frac{2(n-1) - 1}{2(n-1)} \int \frac{1}{(t^2 + 1)^{n-1}} \, dt}
$$

cioè

$$
\textcolor{red}{\int \frac{1}{(t^2 + 1)^n} \, dt = \frac{t}{2(n-1)(t^2 + 1)^{n-1}} + \frac{2n - 3}{2(n-1)} \int \frac{1}{(t^2 + 1)^{n-1}} \, dt}
$$

ricordando che ho

$\textcolor{blue}{x + \frac{p}{2}} = \textcolor{red}{kt}$

e che $k$ vale

$$
\textcolor{blue}{k = \sqrt{\frac{4q - p^2}{4}}}
$$

avrò che

$$
\textcolor{blue}{t = \frac{2x + p}{\sqrt{4q - p^2}}}
$$

> **Nota:** Conviene lasciarlo così come formula ed andarlo a calcolare solo quando hai i dati numerici dell'esercizio, anche perché per calcolarlo ci vogliono vari passaggi:
> - Se è di potenza $4$ devo calcolare prima l'integrale con potenza $3$
> - Per calcolare l'integrale con potenza $3$ devo prima calcolare l'integrale con potenza $2$
> - Per calcolare l'integrale con potenza $2$ devo prima calcolare l'integrale con potenza $1$ (che è di tipo arcotangente)

<a id="formula"></a>

Quindi ricapitolando ottengo che l'integrale

$$
\int \frac{\textcolor{blue}{Ax + B}}{\textcolor{blue}{(x^2 + px + q)^n}} \, dx =
$$

è uguale a

$$
= \frac{\textcolor{blue}{A}}{\textcolor{blue}{2(1 - n)(x^2 + px + q)^{n-1}}} + \frac{\textcolor{blue}{2B - Ap}}{\textcolor{blue}{2 \left(\sqrt{\frac{4q - p^2}{4}}\right)^{2n-1}}} \int \frac{\textcolor{blue}{1}}{\textcolor{blue}{(t^2 + 1)^n}} \, dt
$$

con

$$
\int \frac{\textcolor{blue}{1}}{\textcolor{blue}{(t^2 + 1)^n}} \, dt = \frac{\textcolor{blue}{t}}{\textcolor{blue}{2(n-1)(t^2 + 1)^{n-1}}} + \frac{\textcolor{blue}{2n - 3}}{\textcolor{blue}{2(n-1)}} \int \frac{\textcolor{blue}{1}}{\textcolor{blue}{(t^2 + 1)^{n-1}}} \, dt
$$

essendo

$$
\textcolor{blue}{t = \frac{2x + p}{\sqrt{4q - p^2}}}
$$

È abbastanza complicato?