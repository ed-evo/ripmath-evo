# [Equazioni differenziali ordinarie del primo ordine omogenee]{.text-red}

Diremo che un'equazione differenziale è omogenea del primo ordine se è del tipo

$$
y' = \frac{P(x,y)}{Q(x,y)}
$$

Con $P(x,y)$ e $Q(x,y)$ polinomi omogenei dello stesso grado.

> Un polinomio è omogeneo se tutti i suoi monomi hanno lo stesso grado; se un'equazione è omogenea le sue soluzioni, oltre le nulle, sono del tipo $y = kx$ con $k$ costante.

Per risolvere un'equazione di questo tipo consideriamo la variabile ausiliaria

$$
u = \frac{y}{x}
$$

e quindi lasceremo le $x$ ed al posto delle $y$ avremo:

$\textcolor{blue}{y = ux} \quad \textcolor{blue}{dy = xdu + udx}$

In questo modo l'equazione diventa a variabili separabili, separeremo le $x$ dalle $u$ ed integreremo; dopo risostituiremo alla $u$ il valore $y/x$.

---

Vediamolo su un esempio: risolvere l'equazione differenziale

$\textcolor{blue}{y'(x^2 - y^2) = xy} \quad \text{con } \textcolor{blue}{x^2 - y^2 \neq 0}$

Scriviamola nella forma tipica

$$
y' = \frac{xy}{x^2 - y^2}
$$

cioè

$$
\frac{dy}{dx} = \frac{xy}{x^2 - y^2}
$$

Ora sostituisco a $y$ e $dy$ la nuova variabile

$$
\frac{xdu + udx}{dx} = \frac{x \cdot ux}{x^2 - u^2x^2}
$$

$$
\frac{xdu + udx}{dx} = \frac{ux^2}{x^2(1 - u^2)}
$$

Semplifico gli $x^2$ dopo l'uguale

$$
\frac{xdu + udx}{dx} = \frac{u}{1 - u^2}
$$

Facciamo il minimo comune multiplo

$\textcolor{blue}{(1 - u^2)(xdu + udx) = u dx}$

Calcolo

$\textcolor{blue}{xdu + udx - u^2xdu - u^3dx = udx}$

Elimino $udx$

$\textcolor{blue}{xdu - u^2xdu - u^3dx = 0}$

Sposto il termine con $dx$ dopo l'uguale

$\textcolor{blue}{xdu - u^2xdu - u^3dx = 0}$

$\textcolor{blue}{xdu - u^2xdu = u^3dx}$

Raccoglo la $xdu$ prima dell'uguale

$\textcolor{blue}{xdu(1 - u^2) = u^3dx}$

Separiamo le variabili: otteniamo

$$
\frac{(1 - u^2)du}{u^3} = \frac{dx}{x}
$$

Ora integriamo da entrambe le parti; prima dell'uguale separo i termini della somma

$$
\int \frac{du}{u^3} - \int \frac{du}{u} = \int \frac{dx}{x}
$$

Sono tutti integrali immediati ed otteniamo

$$
\frac{-1}{2u^2} - \log u = \log x + c
$$

Mettiamo la costante come logaritmo $c = \log k$

$$
\frac{-1}{2u^2} - \log u = \log x + \log k
$$

$$
\frac{-1}{2u^2} = \log u + \log x + \log k
$$

Usando la proprietà del logaritmo di un prodotto

$$
\frac{-1}{2u^2} = \log (kux)
$$

Ora metto $y/x$ al posto di $u$

$$
\frac{-x^2}{2y^2} = \log (ky)
$$

Quindi l'integrale generale è

$$
\textcolor{red}{\frac{-x^2}{2y^2} = \log (ky)}
$$