// Functions for building the calendar

const calendarTemplate = _.template(`
<table style="margin-top: 20px;">

<thead>
<tr>
  <td class="header">Date</td>
  <td class="header">Lecture</td>
  <td class="header">Materials</td>
  <td class="header">Assignment</td>
</tr>
</thead>


<!-- begin data 88 table -->
<!-- <li class="list-group-item"></li> -->

<tbody id="calendar-target">

<% _.forEach(weeks, (week) => { %>

    <tr>
        <td><%= week.date %></td>
        <td><%= week.title %></td>
        <td><ul class="list-group">

            <% _.forEach(week.materials, (material) => { %>

                <% if ("url" in material && material.url !== null) { %>

                    <li class="list-group-item">
                        <a href="<%= material.url %>" target="_blank_"><%= material.title %></a>
                    </li>

                <% } else { %>

                    <li class="list-group-item"><%= material.title %></li>

                <% } %>

            <% }); %>

        </ul></td>
        <td>
        
            <% if ("assignment" in week && week.assignment !== null) { %>

                <% if ("bold" in week.assignment && week.assignment.bold) { %>
                    <strong><%= week.assignment.title %></strong>
                <% } else { %>
                    <%= week.assignment.title %>
                <% } %> (due <%= week.assignment.dueDate %>)

            <% } %>
        
        </td>
    </tr>

<% }); %>

</tbody>
</table>
`)

function loadCalendar(calendarPath) {
    var jqxhr = $.get(calendarPath, (data) => {
        console.log(data);
        var renderedCalendar = calendarTemplate({
            weeks: data
        });
        $("#calendar-target").append($(renderedCalendar));
    });
    return jqxhr;
}
