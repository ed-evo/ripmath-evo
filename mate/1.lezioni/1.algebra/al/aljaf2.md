Risolvere la seguente equazione logaritmica

$$
\textcolor{red}{(\text{Log } x^2)^2 - 2 \text{ Log } x^3 + 2 = 0}
$$ [nota](aljaf1a.html)

Stavolta, prima di procedere alla soluzione, conviene cercare di rendere l'equazione più semplice.
Come prima cosa estraiamo dal primo quadrato la potenza $$2$$ interna e dal secondo la potenza $$3$$ (regola del logaritmo di una [potenza](algc.html)):

$$
\textcolor{blue}{(2\text{Log } x)^2 - 2 \cdot 3 \text{ Log } x + 2 = 0}
$$

Ora porto il $$2$$ fuori del quadrato: diventa $$4$$

$$
\textcolor{blue}{4(\text{Log } x)^2 - 6 \text{ Log } x + 2 = 0}
$$

Osservo che il logaritmo compare a potenza $$1$$ ed a potenza $$2$$, quindi è come se fosse un'equazione di secondo grado. Per meglio evidenziarlo pongo:

$$
\textcolor{blue}{\text{Log } x = y}
$$

ottengo:

$$
\textcolor{blue}{4y^2 - 6y + 2 = 0}
$$

divido per $$2$$ per renderla più semplice:

$$
\textcolor{blue}{2y^2 - 3y + 1 = 0}
$$

applico la formula risolutiva:

$$
\textcolor{blue}{y_{1,2} = \frac{3 \pm \sqrt{9 - 4(2)(1)}}{4}}
$$

$$
\textcolor{blue}{y_{1,2} = \frac{3 \pm \sqrt{9-8}}{4}}
$$

$$
\textcolor{blue}{y_{1,2} = \frac{3 \pm \sqrt{1}}{4} = \frac{3 \pm 1}{4}}
$$

Ottengo le soluzioni:

$$
\textcolor{blue}{y = 1} \quad \textcolor{blue}{y = \frac{1}{2}}
$$

Ora devo risolvere le equazioni:

$$
\textcolor{blue}{\text{Log } x = 1} \quad \textcolor{blue}{\text{Log } x = \frac{1}{2}}
$$

- risolvo la prima:
  siccome ho la L maiuscola il logaritmo è in base $$10$$ e posso scrivere ricordando che $$1 = \text{Log } 10$$
  $$
  \textcolor{blue}{\text{Log } x = \text{Log } 10}
  $$
  cioè eguagliando gli argomenti:
  $$
  \textcolor{blue}{x = 10}
  $$
- risolvo la seconda:
  $$
  \textcolor{blue}{\text{Log } x = \frac{1}{2}}
  $$
  Moltiplico per $$2$$ entrambi i termini:
  $$
  \textcolor{blue}{2 \text{ Log } x = 1}
  $$
  Porto il $$2$$ all'interno dell'argomento e trasformo in logaritmo il termine dopo l'uguale:
  $$
  \textcolor{blue}{\text{Log } x^2 = \text{Log } 10}
  $$
  cioè eguagliando gli argomenti:
  $$
  \textcolor{blue}{x^2 = 10}
  $$
  Ottengo le soluzioni:
  $$
  \textcolor{blue}{x = -\sqrt{10}} \quad \textcolor{blue}{x = \sqrt{10}}
  $$

Ora devo controllare se le tre soluzioni sono accettabili.

Siccome l'argomento è $$\textcolor{blue}{x}$$ ed $$\textcolor{blue}{x^2}$$ dovrà essere $$\textcolor{blue}{x > 0}$$ e la soluzione sarà accettabile se positiva, quindi sono accettabili le soluzioni:

$$
\textcolor{red}{x = 10} \quad \textcolor{red}{x = \sqrt{10}}
$$