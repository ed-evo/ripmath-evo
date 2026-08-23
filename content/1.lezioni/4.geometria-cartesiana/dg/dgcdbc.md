# [esercizio]{.text-red}

Trovare l'equazione della parabola con asse verticale che passa per il punto [$$A=(0,3)$]{.text-blue}, ed ha il vertice nel punto [$$V=(2, -1)$]{.text-blue}

> usiamo il metodo più semplice

L'equazione generica della parabola con asse verticale è
[$$y = ax^2 + bx + c$]{.text-blue}

- Condizione di passaggio per il punto [$$A = (0, 3)$]{.text-blue}
  Sostituisco a $$x$$ il valore $$0$$ ed a $$y$$ il valore $$3$$
  [$$3 = a \cdot 0^2 + b \cdot 0 + c$]{.text-blue}
  Quindi la condizione richiesta è
  [$$c = 3$]{.text-red}

- La prima coordinata del vertice vale $$2$$
  $$
  -\frac{b}{2a} = 2
  $$
  [$$-b = 4a$]{.text-blue}
  Quindi la condizione richiesta è
  [$$4a + b = 0$]{.text-red}

- Condizione di passaggio per il vertice [$$V = (2, -1)$]{.text-blue}
  Sostituisco a $$x$$ il valore $$2$$ ed a $$y$$ il valore $$-1$$
  [$$-1 = a \cdot 2^2 + b \cdot 2 + c$]{.text-blue}
  Quindi la condizione richiesta è
  [$$4a + 2b + c = -1$]{.text-red}

Poiché le tre condizioni devono valere contemporaneamente facciamo il [sistema]{.text-red} per trovare le incognite [$$a$]{.text-red}, [$$b$]{.text-red} e [$$c$]{.text-red}

$$
\begin{cases} 
c = 3 \\ 
4a + b = 0 \\ 
4a + 2b + c = -1 
\end{cases}
$$

Sostituisco il valore di $$c$$ ricavato dalla prima equazione nella terza equazione; al posto della prima equazione mettiamo una linea

> conviene farlo perché una volta usata un'equazione non devi più usarla sino alla soluzione altrimenti il sistema diventa indeterminato

$$
\begin{cases} 
\text{---} \\ 
4a + b = 0 \\ 
4a + 2b + 3 = -1 
\end{cases}
$$

$$
\begin{cases} 
\text{---} \\ 
4a + b = 0 \\ 
4a + 2b = -4 
\end{cases}
$$

Ricavo $$b$$ dalla seconda equazione e sostituisco nella terza

$$
\begin{cases} 
\text{---} \\ 
b = -4a \\ 
4a + 2(-4a) = -4 
\end{cases}
$$

$$
\begin{cases} 
\text{---} \\ 
\text{---} \\ 
4a - 8a = -4 
\end{cases}
$$

$$
\begin{cases} 
\text{---} \\ 
\text{---} \\ 
- 4a = -4 
\end{cases}
$$

Divido da entrambe le parti per $$-4$$ ed ottengo

$$
\begin{cases} 
\text{---} \\ 
\text{---} \\ 
a = 1 
\end{cases}
$$

Riscrivo la seconda e vi sostituisco il valore di $$a$$

$$
\begin{cases} 
c = 3 \\ 
b = -4a = -4(1) = -4 \\ 
a = 1 
\end{cases}
$$

Quindi ottengo

$$
\begin{cases} 
c = 3 \\ 
b = -4 \\ 
a = 1 
\end{cases}
$$

O meglio (ordino)

$$
\begin{cases} 
a = 1 \\ 
b = -4 \\ 
c = 3 
\end{cases}
$$

Quindi l'equazione cercata è
[$$y = x^2 - 4x + 3$]{.text-blue}