# Trasformare un numero complesso dalla forma normale alla forma trigonometrica

Per trasformare il numero dalla forma tipica alla forma trigonometrica devo tener presenti le formule:

- $$
  \textcolor{blue}{\rho = \sqrt{a^2 + b^2}}
  $$
- $$
  \textcolor{red}{a = \rho \cos \theta} \quad \textcolor{red}{b = \rho \sin \theta}
  $$

Faccio il rapporto:

$$
\textcolor{red}{\frac{b}{a} = \frac{\rho \sin \theta}{\rho \cos \theta} = \tan \theta}
$$

Quindi:

$$
\textcolor{blue}{\tan \theta = \frac{b}{a}}
$$

Vediamo il procedimento su un paio di esempi:

***

Considero il numero complesso:
$$
\textcolor{blue}{z = a + ib = 1 + i}
$$

Per trasformarlo in forma trigonometrica:
$$
\textcolor{blue}{z = \rho (\cos \theta + i \sin \theta)}
$$

Devo trovare il valore di $\rho$ e $\theta$.

- Dalla relazione:
  $$
  \textcolor{red}{\rho = \sqrt{a^2 + b^2}}
  $$
  ho:
  $$
  \textcolor{red}{a = 1 \quad b = 1}
  $$
  Quindi:
  $$
  \textcolor{blue}{\rho = \sqrt{1^2 + 1^2} = \sqrt{2}}
  $$

- Dalle relazioni:
  $$
  \textcolor{red}{a = \rho \cos \theta \quad b = \rho \sin \theta}
  $$
  ottengo:
  $$
  \textcolor{red}{\frac{b}{a} = \frac{\rho \sin \theta}{\rho \cos \theta} = \tan \theta}
  $$
  quindi:
  $$
  \textcolor{blue}{\tan \theta = 1/1 = 1}
  $$
  L'angolo minore la cui tangente vale $1$ è $45^\circ$ o preferibilmente $\pi/4$.

Ottengo:
$$
\textcolor{blue}{z = 1 + i = \sqrt{2} (\cos \pi/4 + i \sin \pi/4)}
$$

***

Considero il numero complesso:
$$
\textcolor{blue}{z = a + ib = 3 + i\sqrt{3}}
$$

Devo trasformarlo in forma trigonometrica:
$$
\textcolor{blue}{z = \rho (\cos \theta + i \sin \theta)}
$$

- Dalla relazione:
  $$
  \textcolor{red}{\rho = \sqrt{a^2 + b^2}}
  $$
  ho:
  $$
  \textcolor{red}{a = 3 \quad b = \sqrt{3}}
  $$
  Quindi:
  $$
  \textcolor{blue}{\rho = \sqrt{3^2 + (\sqrt{3})^2} = \sqrt{9 + 3} = \sqrt{12} = 2\sqrt{3}}
  $$

- Dalla relazione:
  $$
  \textcolor{red}{\tan \theta = \frac{b}{a}}
  $$
  ho:
  $$
  \textcolor{blue}{\tan \theta = \frac{\sqrt{3}}{3}}
  $$

L'angolo minore la cui tangente vale $\sqrt{3}/3$ è $30^\circ$ o preferibilmente $\pi/6$.

Ottengo:
$$
\textcolor{blue}{z = 3 + i\sqrt{3} = 2\sqrt{3} (\cos \pi/6 + i \sin \pi/6)}
$$