# First Web Development Lab

This repository contains the first web page created for the **Web Interface Development** course. The objective of this lab is to practice basic web development skills using HTML and experiment with the structure of a simple webpage.

## Project Structure

The project is composed of the following files:

- **index.html**: The main HTML file containing the structure of the webpage.
- **images/wordcloud.svg**: An SVG image representing the "Desenvolvimento de Interfaces Web" used in the webpage.

## Technologies Covered

In this lab, we explore the following web technologies:

- **HTML**: The basic structure of the webpage.
- **CSS**: Styling (though not yet implemented in this lab, it will be introduced in future lessons).
- **JavaScript**: (To be covered later in the course).
- **React and Next.js**: Modern JavaScript frameworks that will be discussed in the course.

## Webpage Description

The webpage includes:

- A heading (`<h1>`) with the message: **Olá!** (Hello!)
- A paragraph introducing the webpage as the first project in the **Web Interface Development** course.
- A link to the course page on Moodle: [Desenvolvimento de Interfaces Web](https://moodle.ensinolusofona.pt/course/view.php?id=28717)
- A list (`<ul>`) outlining the key technologies to be studied.
- A closing message encouraging creative solutions.
- An embedded SVG image representing **Desenvolvimento de Interfaces Web**.

## How to View

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser to view the webpage.

## Future Improvements

In future labs, we will expand this webpage with:

- **CSS** for better visual styling.
- **JavaScript** for dynamic content.
- More advanced frameworks like **React** and **Next.js**.

Stay tuned for more updates as we continue learning and developing web interfaces!

## Feedback

### Lab 1

Olá! O trabalho está muito avançado, mas nos próximos laboratórios apenas podemos aplicar os conteúdos dados nas aulas.

Desta forma vamos começar com projetos mais simples e vamos depois começar a aplicar conceitos mais avançados!

### Lab 2

Excelente trabalho. Bom uso do HTML semântico.

Na lista no info.html devemos colocar um cabeçalho antes da lista:

```html
<ol>
    <li>Architectural Innovation: After World War II, Rotterdam was heavily bombed, leading to a rebuilding effort that embraced modern architecture. The city is known for its striking and innovative buildings, including the Cube Houses (Kubuswoningen) and the Markthal, a massive indoor market with a colorful ceiling mural.</li>
    <li>Largest Port in Europe: Rotterdam is home to one of the largest and busiest ports in the world, often referred to as the "Gateway to Europe." The port plays a crucial role in global trade and logistics.</li>
    <li>Vibrant Cultural Scene: Rotterdam boasts a rich cultural scene with numerous museums, galleries, and theaters. The Kunsthal and the Boijmans Van Beuningen Museum are two prominent art institutions in the city.</li>
    <li>Green Spaces: Despite its modernity, Rotterdam places a strong emphasis on green spaces and sustainability. The city features several parks and green areas, such as the Kralingse Bos and the Het Park, providing residents and visitors with plenty of opportunities for outdoor activities.</li>
    <li>Rotterdam’s Floating Pavilion: The city is known for its unique Floating Pavilion, an innovative structure designed to float on water. It serves as a venue for exhibitions, conferences, and events, showcasing Rotterdam's commitment to sustainable and creative architecture.</li>
</ol>
```

```html
<h3>Curiosidades</h3>
<ol>
    <li>Architectural Innovation: After World War II, Rotterdam was heavily bombed, leading to a rebuilding effort that embraced modern architecture. The city is known for its striking and innovative buildings, including the Cube Houses (Kubuswoningen) and the Markthal, a massive indoor market with a colorful ceiling mural.</li>
    <li>Largest Port in Europe: Rotterdam is home to one of the largest and busiest ports in the world, often referred to as the "Gateway to Europe." The port plays a crucial role in global trade and logistics.</li>
    <li>Vibrant Cultural Scene: Rotterdam boasts a rich cultural scene with numerous museums, galleries, and theaters. The Kunsthal and the Boijmans Van Beuningen Museum are two prominent art institutions in the city.</li>
    <li>Green Spaces: Despite its modernity, Rotterdam places a strong emphasis on green spaces and sustainability. The city features several parks and green areas, such as the Kralingse Bos and the Het Park, providing residents and visitors with plenty of opportunities for outdoor activities.</li>
    <li>Rotterdam’s Floating Pavilion: The city is known for its unique Floating Pavilion, an innovative structure designed to float on water. It serves as a venue for exhibitions, conferences, and events, showcasing Rotterdam's commitment to sustainable and creative architecture.</li>
</ol>
```

Podemos até criar uma section:


```html
<section>
    <h3>Curiosidades</h3>
    <ol>
        <li>Architectural Innovation: After World War II, Rotterdam was heavily bombed, leading to a rebuilding effort that embraced modern architecture. The city is known for its striking and innovative buildings, including the Cube Houses (Kubuswoningen) and the Markthal, a massive indoor market with a colorful ceiling mural.</li>
        <li>Largest Port in Europe: Rotterdam is home to one of the largest and busiest ports in the world, often referred to as the "Gateway to Europe." The port plays a crucial role in global trade and logistics.</li>
        <li>Vibrant Cultural Scene: Rotterdam boasts a rich cultural scene with numerous museums, galleries, and theaters. The Kunsthal and the Boijmans Van Beuningen Museum are two prominent art institutions in the city.</li>
        <li>Green Spaces: Despite its modernity, Rotterdam places a strong emphasis on green spaces and sustainability. The city features several parks and green areas, such as the Kralingse Bos and the Het Park, providing residents and visitors with plenty of opportunities for outdoor activities.</li>
        <li>Rotterdam’s Floating Pavilion: The city is known for its unique Floating Pavilion, an innovative structure designed to float on water. It serves as a venue for exhibitions, conferences, and events, showcasing Rotterdam's commitment to sustainable and creative architecture.</li>
    </ol>
</section>
```

2. Devemos ser mais explicativos no texto alternativo nas imagens e evitar usar:

```html
<img src="images/cheapSmall.jpg" alt="City2">
<img src="images/depositeSmall.jpg" alt="City3">
```