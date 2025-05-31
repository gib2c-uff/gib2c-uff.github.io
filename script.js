function hideAll()
{
    document.getElementById("DNARNA").hidden = true
    document.getElementById("DEFAULT").hidden = true
    document.getElementById("TABLE").hidden = true
}


function TABLEMode()
{
    hideAll()
    document.getElementById("TABLE").hidden = false
}


function DNAMode()
{
    hideAll()
    document.getElementById("DNARNA").hidden = false
}



function drawAcid(inp, isRNA)
{
    let box = document.getElementById("drawing")
    let prots = document.getElementById("proteins")
    let item
    let width
    let line
    let direction = "left"
    while (box.hasChildNodes()){ box.removeChild(box.firstChild) }

    for (let i = 0; i < inp.length; i++)
    {
        switch(i % 12)
        {
            case 0: width  = 240; direction = "left"; break;
            case 1: width  = 200; direction = "left"; break;
            case 2: width  = 100; direction = "left"; break;
            case 3: width  = 100; direction = "right"; break;
            case 4: width  = 200; direction = "right"; break;
            case 5: width  = 240; direction = "right"; break;
            case 6: width  = 240; direction = "right"; break;
            case 7: width  = 200; direction = "right"; break;
            case 8: width  = 100; direction = "right"; break;
            case 9: width  = 100; direction = "left"; break;
            case 10: width = 200; direction = "left"; break;
            case 11: width = 240; direction = "left"; break;
        }

        switch(inp[i])
        {
            case 'A': item = ["#e8524b", "A"]; break;
            case 'T': item = ["#ffcf4f", "T"]; break;
            case 'U': item = ["#f680e7", "U"]; break;
            case 'C': item = ["#6397f5", "C"]; break;
            case 'G': item = ["#58b374", "G"]; break;
        }

        if (isRNA == 1)
        {
            if (direction == "right")
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px\"> <div class=\"ball\" style=\"background-color: #a592de; border-color: #a592de;\"> </div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> </div>"
                box.appendChild(line)
            }
            else
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px;\"> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: #a592de; border-color: #a592de\"> </div> </div>"
                box.appendChild(line)
            }
        }
        else
        {
            if (direction == "right")
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px\"> <div class=\"ball\" style=\"background-color: white\"> </div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> </div>"
                box.appendChild(line)
            }
            else
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px;\"> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: white\"> </div> </div>"
                box.appendChild(line)
            }
        }
    }
}



function drawProt(inp)
{
    let box = document.getElementById("proteins")
    let line
    let color
    while (box.hasChildNodes()){ box.removeChild(box.firstChild) }
    for (let i = 0; i < inp.length; i++)
        {

            switch(inp[i])
            {
            case 'F': color = "#ffcf4f"; break;
            case 'L': color = "#ffcf4f"; break;
            case 'S': color = "#58b374"; break;
            case 'Y': color = "#58b374"; break;
            case '*': color = "#e8524b"; break;
            case 'C': color = "#e8524b"; break;
            case 'W': color = "#e8524b"; break;
            case 'P': color = "#ffcf4f"; break;
            case 'H': color = "#e8524b"; break;
            case 'Q': color = "#e8524b"; break;
            case 'R': color = "#e8524b"; break;
            case 'I': color = "#ffcf4f"; break;
            case 'N': color = "#e8524b"; break;
            case '>': color = "#ffcf4f"; break;
            case 'T': color = "#58b374"; break;
            case 'K': color = "#e8524b"; break;
            case 'V': color = "#ffcf4f"; break;
            case 'A': color = "#e8524b"; break;
            case 'D': color = "#e8524b"; break;
            case 'E': color = "#e8524b"; break;
            case 'G': color = "#e8524b"; break;

            }

            line = document.createElement("center")
            line.innerHTML = "<div class=\"amino-text\" style=\"width:200px; font-size: 32px; background-color: " + color + "\">" + inp[i] + "</div>"
            box.appendChild(line)
    }
}



function valid(reason)
{
    if (reason == 0)
    {
        document.getElementById("converter-output").textContent = "QUANTIDADE INVÁLIDA DE BASES"
    }
    else if (reason == 1)
    {
        document.getElementById("converter-output").textContent = "VALOR INCORRETO PARA BASES"
    }
    else if (reason == 2)
    {
        document.getElementById("converter-output").textContent = ""
    }
}



function checkValidity(text)
{
    text = text.replace(/\s/g,'')
    let size = text.length
    
    if (size % 3 != 0)
    {
        valid(0)
        return 0
    }
    else
    {
        text = text.toUpperCase()
        return text
    }
}



function convertToDNA()
{
    let textBox = document.getElementById("converter-input").value
    let check = checkValidity(textBox)
    let result = ''
    if (check != 0)
    {
        let size = check.length
        
        for (let i = 0; i < size; i++)
        {
            switch(check[i])
            {
                case 'U': result += 'A'; break;
                case 'A': result += 'T'; break;
                case 'C': result += 'G'; break;
                case 'G': result += 'C'; break;
                default: size = 0;
            }
        }
        if (size == 0)
        {
            valid(1)
        }
        else
        {
            document.getElementById("converter-input").value = result
            valid(2)
            drawAcid(result, 0)
        }
    }
}



function convertToRNA()
{
    let textBox = document.getElementById("converter-input").value
    let check = checkValidity(textBox)
    let result = ''
    if (check != 0)
    {
        let size = check.length
        
        for (let i = 0; i < size; i++)
        {
            switch(check[i])
            {
                case 'T': result += 'A'; break;
                case 'A': result += 'U'; break;
                case 'C': result += 'G'; break;
                case 'G': result += 'C'; break;
                default: size = 0;
            }
        }
        if (size == 0)
        {
            valid(1)
        }
        else
        {
            document.getElementById("converter-input").value = result
            valid(2)
            drawAcid(result, 1)
        }
    }
}



function convertToPROT()
{
    let textBox = document.getElementById("converter-input").value
    let check = checkValidity(textBox)
    let result = ''
    if (check != 0)
    {
        let size = check.length
        
        for (let i = 0; i < size; i+=3)
        {
            triad = check[i] + check[i+1] + check[i+2]
            prot = ''
            switch(triad)
            {
                case "UUU": prot = 'F'; break;
                case "UUC": prot = 'F'; break;
                case "UUA": prot = 'L'; break;
                case "UUG": prot = 'L'; break;
                case "UCU": prot = 'S'; break;
                case "UCC": prot = 's'; break;
                case "UCA": prot = 'S'; break;
                case "UCG": prot = 'S'; break;
                case "UAU": prot = 'Y'; break;
                case "UAC": prot = 'Y'; break;
                case "UAA": prot = '*'; break;
                case "UAG": prot = '*'; break;
                case "UGU": prot = 'C'; break;
                case "UGC": prot = 'C'; break;
                case "UGA": prot = '*'; break;
                case "UGG": prot = 'W'; break;
                case "CUU": prot = 'L'; break;
                case "CUC": prot = 'L'; break;
                case "CUA": prot = 'L'; break;
                case "CUG": prot = 'L'; break;
                case "CCU": prot = 'P'; break;
                case "CCC": prot = 'P'; break;
                case "CCA": prot = 'P'; break;
                case "CCG": prot = 'P'; break;
                case "CAU": prot = 'H'; break;
                case "CAC": prot = 'H'; break;
                case "CAA": prot = 'Q'; break;
                case "CAG": prot = 'Q'; break;
                case "CGU": prot = 'R'; break;
                case "CGC": prot = 'R'; break;
                case "CGA": prot = 'R'; break;
                case "CGG": prot = 'R'; break;
                case "AUU": prot = 'I'; break;
                case "AUC": prot = 'I'; break;
                case "AUA": prot = 'I'; break;
                case "AUG": prot = '>'; break;
                case "ACU": prot = 'T'; break;
                case "ACC": prot = 'T'; break;
                case "ACA": prot = 'T'; break;
                case "ACG": prot = 'T'; break;
                case "AAU": prot = 'N'; break;
                case "AAC": prot = 'N'; break;
                case "AAA": prot = 'K'; break;
                case "AAG": prot = 'K'; break;
                case "AGU": prot = 'S'; break;
                case "AGC": prot = 'S'; break;
                case "AGA": prot = 'R'; break;
                case "AGG": prot = 'R'; break;
                case "GUU": prot = 'V'; break;
                case "GUC": prot = 'V'; break;
                case "GUA": prot = 'V'; break;
                case "GUG": prot = 'V'; break;
                case "GCU": prot = 'A'; break;
                case "GCC": prot = 'A'; break;
                case "GCA": prot = 'A'; break;
                case "GCG": prot = 'A'; break;
                case "GAU": prot = 'D'; break;
                case "GAC": prot = 'D'; break;
                case "GAA": prot = 'E'; break;
                case "GAG": prot = 'E'; break;
                case "GGU": prot = 'G'; break;
                case "GGC": prot = 'G'; break;
                case "GGA": prot = 'G'; break;
                case "GGG": prot = 'G'; break;
            }
            result += prot
        }
        drawProt(result)
        if (size == 0)
        {
            valid(1)
        }
        else
        {
            document.getElementById("converter-input").value = result
            valid(2)
            drawAcid(result, 1)
        }
    }
}



function showBases()
{
    document.getElementById("AMINOS").hidden = true
    document.getElementById("BASES").hidden = false
}



function showAmino()
{
    document.getElementById("BASES").hidden = true
    document.getElementById("AMINOS").hidden = false
}