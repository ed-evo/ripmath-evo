# [Definizione di funzione continua]{.text-red}

Intuitivamente possiamo dire che una funzione si dice continua quando possiamo disegnarla senza staccare la penna dal foglio (o il gessetto dalla lavagna) ma penso sia il caso di darne una definizione matematica precisa utilizzando il concetto di limite:

[Una funzione si dice continua in un punto quando in quel punto coincide con il suo limite]{.text-purple}

[Una funzione si dice continua in un intervallo quando è continua in ogni punto dell'intervallo]{.text-purple}

In linguaggio matematico

[$$y=f(x)$$ è continua nel punto $$c$$ se]{.text-red}

$$
\lim_{x \to c} f(x) = f(c)
$$

e

[$$y=f(x)$$ è continua in un intervallo se per ogni punto $$c$$ dell'intervallo vale]{.text-red}

$$
\lim_{x \to c} f(x) = f(c)
$$

> Il "per ogni" mi trasforma la continuità in un punto nella continuità per ogni punto cioè in tutti i punti dell'intervallo

Si può anche usare la seguente definizione:

[Una funzione è continua in un punto $$c$$ se in quel punto esistono il suo limite destro e sinistro ed i due limiti sono finiti ed uguali]{.text-blue}

$$
\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = k \quad \text{con } k=f(c)
$$

> Deriva dal fatto che il limite esiste se esistono finiti il limite destro e sinistro ed entrambi coincidono