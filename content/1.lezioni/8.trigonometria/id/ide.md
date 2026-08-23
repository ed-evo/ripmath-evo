# Teorema delle proiezioni

Si chiama delle proiezioni perché è come se proiettassimo due lati del triangolo sul terzo lato.

> **Nota:** Con questo teorema, conoscendo due lati e due angoli, posso trovare il terzo lato: non è che sia molto esaltante, anche perché i dati sono sovrabbondanti ($$2$$ lati e $$2$$ angoli), però servirà per dimostrare il teorema di Carnot.

## Teorema

In ogni triangolo un lato è uguale alla somma dei prodotti degli altri due lati per il coseno degli angoli compresi fra quei lati e il lato cercato.

$$
\textcolor{red}{a = b \cos \gamma + c \cos \beta}
$$
$$
\textcolor{red}{b = a \cos \gamma + c \cos \alpha}
$$
$$
\textcolor{red}{c = a \cos \beta + b \cos \alpha}
$$

## Dimostriamo la prima relazione

Dal punto $$A$$ mando la perpendicolare $$AL$$ sul lato $$BC$$.
Ottengo i due triangoli $$ABL$$ e $$ALC$$. Il triangolo $$ABL$$ è rettangolo e quindi, per il teorema del coseno sui triangoli rettangoli, abbiamo:

$$
\textcolor{blue}{BL = AB \cos \beta = c \cos \beta}
$$

Anche il triangolo $$ACL$$ è rettangolo quindi, per lo stesso teorema, abbiamo:

$$
\textcolor{blue}{LC = AC \cos \gamma = b \cos \gamma}
$$

Ma noi abbiamo che:

$$
\textcolor{red}{BC = a} = \textcolor{blue}{BL + LC} = \textcolor{red}{c \cos \beta + b \cos \gamma}
$$

Come volevamo.

## Dimostriamo la seconda relazione

Dal punto $$B$$ mando la perpendicolare $$BK$$ sul lato $$AC$$.
Ottengo i due triangoli $$ABK$$ e $$BKC$$. Il triangolo $$ABK$$ è rettangolo e quindi, per il teorema del coseno sui triangoli rettangoli, abbiamo:

$$
\textcolor{blue}{AK = AB \cos \alpha = c \cos \alpha}
$$

Anche il triangolo $$BKC$$ è rettangolo quindi, per lo stesso teorema, abbiamo:

$$
\textcolor{blue}{KC = BC \cos \gamma = a \cos \gamma}
$$

Ma noi abbiamo che:

$$
\textcolor{red}{AC = b} = \textcolor{blue}{AK + KC} = \textcolor{red}{c \cos \alpha + a \cos \gamma}
$$

Come volevamo.

## Dimostriamo la terza relazione

Dal punto $$C$$ mando la perpendicolare $$CH$$ sul lato $$AB$$.
Ottengo i due triangoli $$ACH$$ e $$CHB$$. Il triangolo $$ACH$$ è rettangolo e quindi, per il teorema del coseno sui triangoli rettangoli, abbiamo:

$$
\textcolor{blue}{AH = AC \cos \alpha = b \cos \alpha}
$$

Anche il triangolo $$CHB$$ è rettangolo quindi, per lo stesso teorema, abbiamo:

$$
\textcolor{blue}{HB = CB \cos \beta = a \cos \beta}
$$

Ma noi abbiamo che:

$$
\textcolor{red}{AB = c} = \textcolor{blue}{AH + HB} = \textcolor{red}{b \cos \alpha + a \cos \beta}
$$

Come volevamo.